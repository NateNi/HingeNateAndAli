
import './App.css';
import StickyFooter from './StickyFooter';
import StickyHeader from './StickyHeader';
import NathanMessages from './NathanMessages';
import AliciaMessages from './AliciaMessages';
import React, { useState } from 'react';

function App() {

  let convos = [
    {id: 2, date: '2022-10-16 2:50:10', chat: 'Haha, no worries! I totally understand crazy weeks! It sounds like it’s not over for you, did I catch you in the middle of a chaotic time? Wow 3 times is pretty great! I’m sorry that your group broke up, it seems like y’all were a force to be reckoned with. Well, I’m always down for assembling a new trivia group! I worry that I’ll be the team anchor that has to get dragged to victory though. 😅', person: 'n'},
    {id: 1, date: '2022-10-16 1:51:11', chat: 'Hi Alicia! Is your weekend going well? And have you ever won one of the trivia nights? I love going but victory has always eluded me. 😭', person: 'n'},
    {id: 3, date: '2022-10-16 18:17:06', chat: 'Oh nice, I’m jealous! Who are you going to see perform at ACL? And is it your first time going to NYC? (I’ve never been before) Hmmm well I guess entertainment (movies, tv, video games, etc) would be my strongest category. I do decently well with current events and science though too! I feel like it definitely depends on the questions though. Like I’d be hopeless playing Jeopardy or Trivial Pursuit, I have a better pulse on what’s trending vs what is historically important. Sorry I wasn’t able to respond til afternoon, I got up early and drove out to dripping springs to catch some brunch with my family. Have fun at ACL!', person: 'n'},
    {id: 4, date: '2022-10-18 15:52:40', chat: 'Well I hope the weather is nice while you are in NYC this time! Any specific things that you hope to see or do while you’re there? That’s nice to have a full catalog of shows to explore during Covid, it was definitely a challenge to stay entertained during the height of it. And Breaking Bad is amazing, I need to rewatch it at some point! How far into it are you? And if you like Breaking Bad, then Fargo might be worth checking out. It’s an anthology series with a new story each season, and it’s really good. Has Breaking Bad vibes but is it’s own unique thing. And Ozark is pretty good too!', person: 'n'},
    {id: 5, date: '2022-10-21 6:44:39', chat: 'Hope Wicked was a good time! I imagine it was quite an experience to see it on Broadway! When are you headed back this way? Fargo was originally a movie by the Cohen brothers. It’s mostly based on a true story about a small Minnesota town where the characters make some underhanded plans and everything goes terribly terribly wrong. I know it’s a pretty vague description, but I couldn’t forgive myself if I spoiled it for you. The LOR one is the Rings of Power I think! It’s definitely on my watchlist, are you going to see it too?', person: 'n'},
    {id: 6, date: '2022-10-22 5:19:35', chat: 'If you start up Fargo, let me know! I haven’t seen it in a good while, maybe I’ll do a rewatch at the same time. Well it sounds like its been a fun trip, you’ll have to tell me more about it sometime! I’m itching to travel somewhere, so I’m super jealous. 😭 And yeah I’d really like to meet up! I’m available after 4 during the week (other than this coming Thursday) and usually am pretty flexible on the weekends. Any idea what you might like to do? I know it’s cliche and not very exciting, but meeting somewhere like a coffee shop or brewery would be nice for talking. I’d definitely be down if we want to try something more active too!', person: 'n'},
    {id: 7, date: '2022-10-23 16:58:14', chat: 'Aaaaaaaa, haha! Well now I’m super nervous! I feel like it’s a safer bet than most of my recommendations, but I’ll definitely apologize if you hate it (and you haven’t blocked me yet 😂). Either should work for me! Maybe plan for Friday at 7 and use Sunday as a backup? And I have never been to Sour Duck, I’m excited to try it!', person: 'n'},
    {id: 8, date: '2022-10-23 17:58:56', chat: 'Ok whew! I’m really really glad you’re liking it! I’ll sign up for Hulu this evening and try to catch up, I’m excited about rewatching it and getting to hear your reaction when seeing it the first time!', person: 'n'},
    {id: 9, date: '2022-10-24 2:15:19', chat: 'Just watched the first two episodes, its been a very long time so I only remember bits and pieces. Totally forgot Bob Odenkirk was in it! How’s your week looking? Will you have to catch up a bit after the vacation? We’re in between major projects, so it is likely going to be a little slow for me.', person: 'n'},
    {id: 10, date: '2022-10-24 15:16:56', chat: 'Haha! Molly is so great, its satisfying to watch Lester squirm anytime she gets to take a crack at him. I hope your sister likes it as well! Oof I’m sorry that it’ll be a tough week. ☹️ You got this, but I hope it doesn’t end up too hectic. Is it a busy time in general? I work for ACC, so fall semester is “supposed” to be a busy time for us. But I think it’s the same during Q4 in industry?', person: 'n'},
    {id: 11, date: '2022-10-26 0:50:05', chat: 'Ugh hopefully it ends up being a short sprint and not a marathon of work. If it starts to get intense and there is something I can do to help make the week easier, let me know! I know it’s a bit silly to offer seeing we are still just getting to know each other, but it’s like a nervous tick of mine. When I hear it’s a tough time, I’d like to help out if I can. 😅 I was roped into sitting on an interview committee so that’s been my main source of frustration this week. It’s for a job I don’t know anything about and I’m pretty sure Im having to judge the candidates on gut instincts alone. 😑', person: 'n'},
    {id: 12, date: '2022-10-26 1:53:36', chat: 'Ok nice, I feel keeping work isolated to work hours is important for balance. Im working from home full time, so it can be a bit difficult every once in a while. And I got inspired by your vacay sneaking and snuck one of my own onto the calendar! I’m taking Halloween off, it will not be nearly as exciting as a trip to NYC, but a long weekend will be appreciated! Oh yes, I’d love to hear your experience interviewing people! I’ve always been the interviewee, it’s so strange being on the other side of things!', person: 'n'},
    {id: 13, date: '2022-10-28 1:06:58', chat: 'Yeah it seems like it’s going to be pretty intense! Looks like it should clear out by the early afternoon, but good call on having a backup plan. I drive by Tony C’s all the time but haven’t tried it either! I would definitely be fine with giving it a shot! I guess we can see how tomorrow progresses and make a decision when it gets closer?', person: 'n'},
    {id: 14, date: '2022-10-28 21:10:14', chat: 'IM DONE. 🥳 So glad it’s the weekend! What ya thinking about where to meet up? The forecast doesn’t seem to show any more rain but it might get a little chilly this evening. I’m genuinely fine with either Sour Duck or Tony C’s, do you have a preference?', person: 'n'},
    {id: 15, date: '2022-10-28 21:11:44', chat: 'Im probably a bit more excited to try Sour Duck but I just know it’s going to start drizzling as soon as we arrive 😑', person: 'n'},
    {id: 16, date: '2022-10-28 21:38:03', chat: 'Ok how about Tony C’s then! That area is nice, if we’d like we can walk to Epoch or something if we need to change venues.', person: 'n'},
    {id: 17, date: '2022-10-28 21:47:05', chat: 'Haha! Let me know your findings! 😂', person: 'n'},
    {id: 18, date: '2022-10-28 21:51:21', chat: 'Lol, yeah probably the safer bet. Excited to try it though!', person: 'n'},
    {id: 19, date: '2022-10-28 23:26:01', chat: 'Woof, they keep you pretty late, especially on a Friday! Now I feel bad about bragging when I escaped at 4.', person: 'n'},
    {id: 20, date: '2022-10-28 23:42:20', chat: 'Headed out! I’ll see you soon!', person: 'n'},
    {id: 21, date: '2022-10-29 0:03:02', chat: 'Just parked!', person: 'n'},
    {id: 22, date: '2022-10-29 3:41:04', chat: 'I had a really great time too! And I’d like that a lot! My number is 713-408-2104. I know you offered to give me yours, but just me being contrarian again. :^) We’ll have to be thinking about what to do next if you’re down to meet up again!', person: 'n'},
    {id: 23, date: '2022-10-16 2:15:36', chat: 'Hey Nathan! Sorry meant to respond to your first comment earlier. I promise I’m not being lazy! It’s been a crazy week but more fun is to come :) I’ve won 3 times in my little life 🥇 But my group separated. I moved, some friends had a kid, other people moved. I miss trivia so much!', person:  'a'},
    {id: 24, date: '2022-10-16 12:09:07', chat: 'Very much so! I’m on vacation this week 🥳 so this past week was filled with prep work (work and personal). I have ACL today (woo!) and then I’m off the NYC for the week! Yeah, it’s always hard to form a new group. What’s your category of ~expertise~?', person:  'a'},
    {id: 25, date: '2022-10-18 2:07:46', chat: 'My favorite at ACL was probably Paramore. They did such a great job of keeping the audience engaged. It was a lot of fun 😄 I went to NYC about 10 years ago but it rained half of the time so I felt like I didn’t get the full experience. I’m super excited to start my vacation soon!', person:  'a'},
    {id: 26, date: '2022-10-18 2:09:50', chat: 'That’s awesome! I didn’t really start watching tv until Covid hit…which was kind of nice since I had all seasons of shows available to me. I feel not so out of the loop anymore. My newly found favorite show is Breaking Bad', person:  'a'},
    {id: 27, date: '2022-10-20 20:52:58', chat: 'Great weather so far 😁 The thing I was looking forward to the most is seeing Wicked on broadway which is what I have planned for tonight! Finished Breaking Bad and LOVED it. Ozark is another recent watch and it’s my second favorite show. Never heard of Fargo…unless…is that the one related to LOR?', person:  'a'},
    {id: 28, date: '2022-10-22 1:34:33', chat: 'I enjoyed Wicked so much! The ending caught me by surprise! Oh, idk what I was think of for the LOR one but I will definitely try out Fargo I come back tomorrow night 🥲 We should do something next week if you are in town & available', person:  'a'},
    {id: 29, date: '2022-10-23 16:46:11', chat: 'Starting episode 1 of Fargo! If I hate it I’m never talking to you again 😉', person:  'a'},
    {id: 30, date: '2022-10-23 16:48:08', chat: 'I’m free this Friday (7pm?) or Sunday afternoon. If Friday let’s grab a drink at Sour Duck!', person:  'a'},
    {id: 31, date: '2022-10-23 17:44:53', chat: 'Ok, Friday it is! And WOW 😳 just finished episode 1 Amazing recommendation! I’m hooked', person:  'a'},
    {id: 32, date: '2022-10-24 11:29:45', chat: 'I finished episode 2 as well! I told my sister about it and I think she’s going to start watching it too. The entire episode I’m like yes Molly keep asking questions!!', person:  'a'},
    {id: 33, date: '2022-10-24 11:32:31', chat: 'I had the Sunday scaries bad last night. I haven’t even looked at my work emails (and I usually skim them in preparation) so it’s going to be very overwhelming.', person:  'a'},
    {id: 34, date: '2022-10-26 0:36:23', chat: 'It shouldn’t be a busy time but it is due to many VP escalations 😫 It’s now my busiest time of the year and most stressful due to the visibility of getting this done asap The weekend can’t come soon enough!', person:  'a'},
    {id: 35, date: '2022-10-26 1:17:00', chat: 'Thank you so much 🥲 I try to leave work behind once I “clock out” so I have that going for me. At least with these project there is a deadline and it will get resolved one way or another. Glad I got to sneak in a vacay :) Hahaha. Wonderful! I interviewed a group of candidates for the first time this year so I can’t wait to exchange stories!', person:  'a'},
    {id: 36, date: '2022-10-27 23:21:15', chat: 'Soooo Friday weather is looking…not fun', person:  'a'},
    {id: 37, date: '2022-10-27 23:23:17', chat: 'Backup (indoor) plan of Tony C’s (Anderson)? I’ve never been but looks like there is a lot of space 🤷🏻‍♀️', person:  'a'},
    {id: 38, date: '2022-10-28 2:27:43', chat: 'Yeah, sounds like a plan!', person:  'a'},
    {id: 39, date: '2022-10-28 21:34:28', chat: 'I know…I’m so conflicted Sour Duck vibes are always amazing But….it’s a patio', person:  'a'},
    {id: 40, date: '2022-10-28 21:41:20', chat: 'Wait wait wait', person:  'a'},
    {id: 41, date: '2022-10-28 21:41:38', chat: 'I’m about to take my dog for a walk and I will asses the situation :)', person:  'a'},
    {id: 42, date: '2022-10-28 21:47:48', chat: 'Ok, yeah Tony c it is 😂', person:  'a'},
    {id: 43, date: '2022-10-28 23:18:15', chat: 'OK, my weekend finally started 🥳', person:  'a'},
    {id: 44, date: '2022-10-28 23:59:17', chat: 'Ok just walked in', person:  'a'},
    {id: 45, date: '2022-10-29 3:14:00', chat: 'Hey! I had a really great time tonight. If interested I would love to give you my number :)', person:  'a'},
  ];

  convos.map(function(convo){
    convo.dateMod = new Date(convo.date).setHours(new Date(convo.date).getHours()-5);
  })

  convos.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return Date.parse(a.date) - Date.parse(b.date);
  });

  const [showNathan, setShowNathan] = useState(true);

  const toggleComponent = () => {
    setShowNathan(!showNathan);
  };

  return (
    <div className="App">
      <StickyHeader convoTarget={showNathan ? 'Alicia' : 'Nathan'} toggleComponent={toggleComponent}/>
      {showNathan ? <NathanMessages convos={convos}/> : <AliciaMessages convos={convos}/>}
      <StickyFooter/>
    </div>
  );
}

export default App;
