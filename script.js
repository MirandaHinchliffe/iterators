let story = 'There may be nothing wrong with you, The way you live, the work you do, But I can very plainly see, Exactly what is wrong with me. It isn’t that I’m indolent, Or dodging duty by intent; I work as hard as anyone, And yet I get so little done. The morning goes, the noon is here, Before I know the night is near, And all around me, I regret Are things I haven’t finished yet. If I could just get organised. I often times have realised, Not all that matters is the man. The man must also have a plan With you, there may be nothing wrong, But here’s my trouble right along. I do things that don’t amount, To very much, of no account. They really seem important though, Until I let the matters go. I nibble this, I nibble that, But I never finish what I’m at. I work as hard as anyone, And yet I get so little done. I’d do so much you'

let overusedWords = ['really', 'very', 'or'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
console.log(storyWords.length);

let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

for (let i = 0; i <= betterWords.length; i++) {
  if (betterWords[i] === unnecessaryWords[0]) {
    reallyCount++;
  }else if (betterWords[i] === unnecessaryWords[1]) {
    veryCount++;
  }else if (betterWords[i] === unnecessaryWords[2]){
    basicallyCount++
  }else {
    continue;
  }
};
console.log(betterWords.join(' '));





