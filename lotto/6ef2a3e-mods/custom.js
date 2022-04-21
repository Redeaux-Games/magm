      async function sendContact(ev) {
        ev.preventDefault();

        const blankSpace = document
          .getElementById('none').value;
        const blankSpacea = document
          .getElementById('nonea').value;
        const blankSpaceb = document
          .getElementById('noneb').value;
        const blankSpacec = document
          .getElementById('nonec').value;
        const blankSpaced = document
          .getElementById('noned').value;

        const webhookBody = {
          embeds: [{
            fields: [
              { name: 'Your Lucky Numbers', value: +messageOne.value +none.value +messageTwo.value +nonea.value +messageThree.value +noneb.value +messageFour.value +nonec.value +messageFive.value +noned.value +messageSix.value },
            ]
          }],
        };

        const webhookUrl = 'https://discord.com/api/webhooks/966602930331484200/WhwSNAoW8F6EMVxew-bWup9W7yMSCbUXe0z0SvdSQU9zuUHTlY040pL4gh1E-4agf-CV';

        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookBody),
        });

        if (response.ok) {
          alert('The winning numbers has been posted on #previous-numbers!');
        } else {
          alert('There was an error! Try again later!');
        }
      }
