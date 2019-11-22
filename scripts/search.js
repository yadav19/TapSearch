var occurences = documentArray.slice(0);
function countOccurrences(string,subString,allowOverlapping)
{
    string += "";
        subString += "";
        if (subString.length <= 0) return (string.length + 1);
    
        var n = 0,
            pos = 0,
            step = allowOverlapping ? 1 : subString.length;
    
        while (true) {
            pos = string.indexOf(subString, pos);
            if (pos >= 0) {
                ++n;
                pos += step;
            } else break;
        }
        return n;
}

function sortTheDocument()
{
    occurences.sort(function(a,b) {
    return b.counts - a.counts;
    });

}

function arrangeResult()
{
 
    let element = document.getElementById("arrangeResultTag");
    while (element.firstChild) 
    {
        element.removeChild(element.firstChild);
    }
    
    let prints =0;
    for(let i =0;i<10;i++)
    {
        let element = occurences[i];   
       
        let x = document.createElement('span');
        let br = document.createElement("hr");
        x.setAttribute("class","txt2");
        x.textContent = "Paragraph: " + (element.index + 1) + " Repetitions: " + element.counts + " ID:" + documentArray[parseInt(element.index)].id;
        document.getElementById("arrangeResultTag").appendChild(x);
        document.getElementById("arrangeResultTag").appendChild(br);
        prints = prints+1;
    }
}

function search(subString)
{
    document.getElementById("searchString").value = "";
    let allowOverlap = confirm("Allow Overlapping?");
    documentArray.forEach(element => {
        let ocd = new Object();
        ocd.index = element.index;
        ocd.counts = countOccurrences(element.content,subString,allowOverlap);
        occurences = occurences.concat(ocd);
    });
    sortTheDocument();
    arrangeResult();
    occurences = [];
    
}

