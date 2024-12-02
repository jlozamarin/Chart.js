const ctx = document.getElementById('barChart');


new Chart (
   ctx, {
       type: 'bar',
       data: {
           labels: ["Red", "Blue", "Yellow","Black"],
           datasets: [
               {
                   label: "Votes",
                   data: [12, 19, 3, 4],
                   backgroundColor: [
                       'rgba(245, 0, 9, 0.45)',
                       'rgba(5, 0, 249, 0.45)',
                       'rgba(250, 250, 5, 0.81)',
                       'rgba(32, 32, 29, 0.81)'
                   ],


                   borderColor: [
                       'rgba(245, 0, 9)',
                       'rgba(5, 0, 249)',
                       'rgba(250, 250, 5)',
                       'rgba(32, 32, 29)',
                       'rgba(245, 0, 9)'
                   ],
               }
           ]
       }
   }
)
