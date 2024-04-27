fetch('https://randomuser.me/api/?results=15')
    .then(response => response.json())
    .then(data => {
        data.results.forEach(user => {
            const mainDiv = document.querySelector('.carousel');
            const randomNumber1 = Math.ceil(Math.random() * 100);
            const randomNumber2 = Math.ceil(Math.random() * 100);
            console.log(randomNumber2);

            const name = `${user.name.title} ${user.name.first}`;
            const image = document.createElement('div');
            const row = document.createElement('div');
            const col4 = document.createElement('div');
            const col8 = document.createElement('div');

            image.className = 'image-item';
            row.className = 'row';
            col4.className = 'col-4';
            col8.className = 'col-8';

            const img = document.createElement('img');
            const h5 = document.createElement('h5');
            const pV = document.createElement('p');
            const pT = document.createElement('p');

            pT.className = 'time';
            h5.innerHTML = name;
            img.src = user.picture.thumbnail;
            pV.innerHTML = `${randomNumber2}k Views`;
            pT.innerHTML = `${randomNumber1} Sec Ago`;

            col4.appendChild(img);
            col8.appendChild(h5);
            col8.appendChild(pV);
            image.appendChild(pT);

            image.appendChild(row);
            row.appendChild(col4);
            row.appendChild(col8);
            mainDiv.appendChild(image);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

document.getElementById("searchButton").addEventListener("click", function () {
        var loaderFill = document.querySelector(".loader-fill");
        var percentageText = document.querySelector(".percentage");
        setTimeout(function () {
            document.getElementById('loading').style.display = "block";
        }, 500);
        setTimeout(function () {
          document.getElementById('useNow').style.display = "none";
      }, 500);
      
        // Reset loader animation
        loaderFill.style.animation = "none";
        void loaderFill.offsetWidth; // Trigger reflow
      
        // Update percentage text
        var percent = 0;
        var interval = setInterval(function () {
          if (percent >= 99) {
            clearInterval(interval);
          } else {
            percent++;
            percentageText.textContent = percent + "%";
          }
        }, 150);
      
        // Start loader animation after a brief delay
        setTimeout(function () {
          loaderFill.style.animation = "fill-animation 18s forwards";
          percentageText.style.opacity = "1"; // Show percentage text
        }, 400);

        fetch('https://randomuser.me/api/?results=25')
        .then(response => response.json())
        .then(data => {
          const mainDiv = document.getElementById('imageContainer');
          data.results.forEach((user, index) => {
            const img = document.createElement('img');
            img.src = user.picture.thumbnail;
            setTimeout(() => {
              mainDiv.appendChild(img);
            }, index * 500); // Adjust delay as needed
          });
        })
        .catch(error => console.error('Error fetching data:', error));

      })      