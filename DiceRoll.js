const BestAppCategories = [
    "Best Educational Solution",
    "Best Enterprise Solution",
    "Best African Solution",
    "Most Agricultural Solution",
    "Best Gaming Solution",
    "Best Health Solution",
    "Best Innovative Solution",
    "Best Consumer Solution",
    "Best Financial Solution",
    "Best Hackathon Solution",
    "Best South African Solution",
    "Best Campus Cup Solution",
  ];

function AppAwardsWinner(BestAppCategories) {
      
      const random = Math.floor(Math.random()*BestAppCategories.length-1);
      return BestAppCategories[random];
}
console.log(AppAwardsWinner(BestAppCategories));
