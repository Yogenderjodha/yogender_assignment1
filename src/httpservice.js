var _ = require("lodash");

export const httpService = new function () {
    return {
        response: [],
        getData: async function (ref) {
            let objThis = this;
            let url = ref.$BaseURL + "sonar";

            const promise = new Promise(function (resolve, reject) {
                
                    //let response;// = await ref.$http.get(url);
                    ref.$http.get(url).then((res)=>{

                    
                    // JSON responses are automatically parsed.
                    let dotsDataTmp = _.sortBy(res.data, "ring");
                    //let dotsData = response.data;
                    let dotsData = [];

                    let arrQuadrants = [
                        "Techniques",
                        "Tools",
                        "Platforms",
                        "Languages-and-frameworks",
                    ];

                    let arrRings = ["Adopt", "Assess", "Trial", "Hold"];
                    for (var i = 0; i < dotsDataTmp.length; i++) {
                        var dotObj = dotsDataTmp[i];

                        if (
                            arrRings.indexOf(dotObj.ring) > -1 &&
                            arrQuadrants.indexOf(dotObj.quadrant) > -1
                        ) {
                            dotObj.index = i + 1;
                            if(dotObj.ring == "Adopt" || dotObj.ring == "Hold"){
                                dotObj.circleId = "AdoptAndHold";
                            }
                            else{
                                dotObj.circleId = dotObj.ring;
                            }
                            dotsData.push(dotObj);

                        }
                    }
                    objThis.response = dotsData;
                    resolve(dotsData);

                }).catch((e)=>{
                    reject(e);
                })
            })

            return promise;
        },
        getUniqueItems: function () {
            let dotsData = this.response;
            let coeFilterItemsTmp = _.uniqBy(dotsData, "SonarName");

            let coeItems = [];
            let sortedCoeItems = _.sortBy(coeFilterItemsTmp, "SonarName");
            for (var j = 0; j < sortedCoeItems.length; j++) {
                var obj = {};
                obj.SonarName = sortedCoeItems[j].SonarName;
                obj.active = false;
                obj.index = j;

                var filtered_array_tmp = _.filter(dotsData, [
                    "SonarName",
                    sortedCoeItems[j].SonarName,
                ]);

                obj.count = filtered_array_tmp.length;
                obj.url = filtered_array_tmp[0].url
                obj.id = filtered_array_tmp[0].id
                coeItems.push(obj);
            }
            
            return coeItems;
        }
    }
}