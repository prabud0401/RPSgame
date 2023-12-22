// 1. Initialize variables for wins, ties, and losses.
var totalWins = 0;
var totalTies = 0;
var totalLosses = 0;

// 2. Set up a loop for 10 rounds.
for (var i = 1; i <= 10; i++) {

    // 3. Prompt the user for 'R', 'P', or 'S'.
    alert("Your in Round: " + i);


    var choice = prompt("Enter 'R', 'P', or 'S': ");
    // 4. Convert user input to uppercase.
    var userChoice = choice.toLocaleUpperCase();


    // 5. Check if the user's choice is valid.
    if (userChoice === 'R' || userChoice === 'P' || userChoice === 'S') {

        // 6. Generate a random choice for the computer.
        var computerChoice = ['R', 'P', 'S'];
        var computerChoices = computerChoice[Math.floor(Math.random() * 3)];


        // 7. Use a switch statement to determine the result.
        alert("Your Choice is: " + userChoice);
        alert("Computet Choice is: " + computerChoices);

        switch (true) {
            case userChoice == computerChoices:
                alert('Tie! ');
                totalTies++;
                break;

            case (userChoice === 'R' && computerChoice === 'S') || (userChoice === 'P' && computerChoice === 'R') || (userChoice === 'S' && computerChoice === 'P'):
                alert('You win! ');
                totalWins++;
                break;

            default:
                alert('You lose!');
                totalLosses++;
        }
    } else {

        // 8. Handle invalid user choices by decrementing the round.
        alert('Invalid choice. Please enter R, P, or S.');
        i--;
    }
}

// 9. Display "Game Over!" and show total wins, ties, and losses in an alert.
alert("Game Over!\n" + "Total Wins: " + totalWins + "\n" + "Total Ties: " + totalTies + "\n" + "Total Losses: " + totalLosses + "\n");

