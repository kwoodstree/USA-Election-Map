createPolitician = function(name, partyColor) 
{
    var politician = {}; //every politician has name and party color
    politician.name = name; 
    politician.electionResults = null; //there are no results at this point
    politician.totalVotes = 0;
    politician.partyColor = partyColor;

    politician.tallyUpTotalVotes = function()
    {
      this.totalVotes = 0;

      for (var i = 0; i < this.electionResults.length; i++)
      {
        this.totalVotes = this.totalVotes + this.electionResults[i];
      }
  };


    return politician;

};

var Hillary = createPolitician("Hillary Clinton",[8, 70, 191]); //constructive function
var Donald   = createPolitician("Donald   Trump", [255, 0, 0]); 


Donald   .electionResults = [9,3,11,6,0,0,0,0,0,29,16,0,4,0,11,6,6,8,8,1,0,0,16,0,6,10,3,5,0,0,0,0,0,15,3,18,7,0,20,0,9,3,11,38,6,0,0,0,5,10,3];

Hillary.electionResults = [0,0,0,0,55,9,  7,  3,  3,  0,  0,  5,  0,  20,  0,  0,  0,  0,  0,  3,  10,  11,  0,  10,  0,  0,  0,  0,  6,  4,  14,  5,  29,  0,  0,  0,  0,  7,  0,  4,  0,  0,  0,  0,  0,  3,  13,  11,  0,  0,  0, ];

// Hillary.electionResults[9] = 1;
// Donald  .electionResults[9] = 28;

// Hillary.electionResults[4] = 17;
// Donald  .electionResults[4] = 38;

// Hillary.electionResults[43] = 11;
// Donald  .electionResults[43] = 27;

console.log(Hillary.electionResults);
console.log(Donald  .electionResults);


var setStateResults = function(state)
{
     theStates[state].winner = null;

     if (Donald  .electionResults[state] > Hillary.electionResults[state])
     {
         theStates[state].winner = Donald  ;
     }
     else if (Donald  .electionResults[state] < Hillary.electionResults[state])
     {
         theStates[state].winner = Hillary;
     }

     var stateWinner = theStates[state].winner;

     if (stateWinner !== null)
     {
        theStates[state].rgbColor = stateWinner.partyColor;
     }
     else
     {
        theStates[state].rgbColor = [180, 180, 180];
    } 

  var stateInfoTable = document.getElementById('stateResults');

  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];

  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];

  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];

  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];

  var winnersName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

  candidate1Name.innerText = Donald  .name;
  candidate2Name.innerText = Hillary.name;

  candidate1Results.innerText = Donald  .electionResults[state];
  candidate2Results.innerText = Hillary.electionResults[state];

  if (theStates[state].winner === null)
  {
    winnersName.innerText = "DRAW";
  }
  else
  {
    winnersName.innerText = theStates[state].winner.name;
  }

};

Donald  .tallyUpTotalVotes();
Hillary.tallyUpTotalVotes();

console.log(Donald  .totalVotes);
console.log(Hillary.totalVotes);

console.log("Donald  's color is: " + Donald  .partyColor);
console.log("Hillary's color is: " + Hillary.partyColor);

var winner = "???";

if (Hillary.totalVotes > Donald  .totalVotes)
{
    winner = Hillary.name;
}
else if (Hillary.totalVotes < Donald  .totalVotes)
{
    winner = Donald  .name;
}
else
{
    winner = "DRAW."
}

console.log("AND THE WINNER IS..." + winner + "!!!");

var countryInfoTable = document.getElementById('countryResults');

var row = countryInfoTable.children[0].children[0];
row.children[0].innerText = Donald  .name;
row.children[1].innerText = Donald  .totalVotes;
row.children[2].innerText = Hillary.name;
row.children[3].innerText = Hillary.totalVotes;

row.children[5].innerText = winner;