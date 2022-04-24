      async function sendContact(ev) {
        ev.preventDefault();

        const senderEmailz = document
          .getElementById('discordUser').value;
        const senderEmail = document
          .getElementById('oneRound').value;
        const senderEmaila = document
          .getElementById('messageOne').value;
        const senderMessagea = document
          .getElementById('messageTwo').value;
        const senderMessageb = document
          .getElementById('messageThree').value;
        const senderMessagec = document
          .getElementById('messageFour').value;
        const senderMessaged = document
          .getElementById('messageFive').value;
        const senderMessagee = document
          .getElementById('messageSix').value;
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
          content: '@everyone I just submitted my MAGMA🌋LOTTO Ticket! Join the MAGMA🌋LOTTO at #how-to-play-🎫 ',
	  allowed_mentions: { "parse": ["everyone", "users"] },
	  username: discordUser.value,
          embeds: [{	     
            fields: [
              { name: 'How many Rounds?', value: +oneRound.value },
              { name: 'My Lucky Numbers', value: +messageOne.value +none.value +messageTwo.value +nonea.value +messageThree.value +noneb.value +messageFour.value +nonec.value +messageFive.value +noned.value +messageSix.value },
            ]
          }],
        };

        const webhookUrl = 'https://discord.com/api/webhooks/966045974910869535/7Zmzy-2g_qCUGqeUUE1skclUtEzLW4Y1azxBfV_9z76fDpVRoIU-RUSsE0bIpsQtuY8X';

        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookBody),
        });

        if (response.ok) {
          alert('Your ticket has been submitted and received, please go back to Discord to the NUMBER DRAW channel!');
        } else {
          alert('There was an error! Try again later!');
        }
      }
