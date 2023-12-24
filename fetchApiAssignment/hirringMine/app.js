let job=document.querySelector('input')

let btn=document.querySelector('button')
let content =document.querySelector('.content')





function SearchHandler(){
    let api=`https://maroon-shorts.cyclic.cloud/api/jobAds/all?limit=10&pageNo=1&keyWord=${job.value}&category=`
    let p=fetch(api)
    p.then((data)=>{
         return data.json()
    }).then((newData)=>{
        forUi(newData)
    })

    
}
function forUi(final){
    final.data.forEach((e)=>{


       let  myHtml=`
       <div class="job" style="width: 35%; background-color: white; padding: 15px 30px; border-radius: 8px; margin-left: 100px; margin-top: 30px;">
       <div style="display: flex; justify-content: space-between;">
       <div style="display: flex; flex-direction: column;">
           <h6 >${e.companyName}</h6>
           <h4 style="margin-top: -10px;">${e.designation}</h4>
           <p style="margin-top: -10px;">No Salary Mentioned</p>

       </div>
       <div style="padding-top: 15px;">
           <img style="width: 50px; height: 20px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAByCAYAAAAGadBRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAGvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA2LTAzVDIzOjQyOjE0KzA1OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wNi0xNFQwMTozNjo1OCswNTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wNi0xNFQwMTozNjo1OCswNTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4YzdhZmM0MC0wYzAzLTM1NDgtODU0Yi1lNTQxODhkMTNkOTMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphMWFhZTI5OS05NTk4LWJkNDctODllZi0zNmZjOGJhY2Q3ZmIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NjRjMWNmOS02NmI1LThkNDAtYmQ1OS1hZmE1NGJjNWM1MjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2NGMxY2Y5LTY2YjUtOGQ0MC1iZDU5LWFmYTU0YmM1YzUyMyIgc3RFdnQ6d2hlbj0iMjAyMy0wNi0wM1QyMzo0MjoxNCswNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NzNlODE4NS0zYzM1LTIwNGEtYWJkOS03OGNmNzBkNjJiZGIiIHN0RXZ0OndoZW49IjIwMjMtMDYtMDVUMTI6MjI6MzkrMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OGM3YWZjNDAtMGMwMy0zNTQ4LTg1NGItZTU0MTg4ZDEzZDkzIiBzdEV2dDp3aGVuPSIyMDIzLTA2LTE0VDAxOjM2OjU4KzA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+CHoiXgAACM1JREFU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" alt="">
       </div></div>

       <div>
           <p>${e.desc.slice(0,50)} </p>
           
           </p>
       </div>
       <div style="display: flex; justify-content: space-between;">
           <p style="padding: 5px 10px; background-color: rgb(187, 120, 187); color: white; border-radius: 10px;">${e.jobFeseability}</p>
           <p>${e.city+','+e.country}</p>
       </div>
       <div style="display: flex; justify-content: space-between;">
           <p>3daysAgo</p>
           <p>${e.views} Veiws</p>

       </div>

   </div>


       `
        content.innerHTML+=myHtml
    })
}




