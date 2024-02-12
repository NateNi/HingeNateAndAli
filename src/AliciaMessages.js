import React from 'react';
import './index.css'; // Import CSS file for styling

const AliciaMessages = ({convos}) => {
  return (
    <div className="screenContainer">
    {convos.map(c => (<div><p class="text-center date"><strong>{new Date(c.dateMod).toDateString().split(' ')[0]}, {new Date(c.dateMod).toDateString().split(' ')[1]} {new Date(c.dateMod).toDateString().split(' ')[2]}</strong> {new Date(c.dateMod).toLocaleTimeString('en-US').split(':')[0]}:{new Date(c.dateMod).toLocaleTimeString('en-US').split(':')[1]} {new Date(c.dateMod).toLocaleTimeString('en-US').slice(-2)}</p><div className={c.person === 'a' ? 'row text-right' : 'row text-left'}><div className="bubbleContainer"><div className={c.person === 'n' ? 'profilePic nathanPic' : ''}></div><div className={c.person === 'a' ? '' : (/\p{Extended_Pictographic}/u.test(c.chat.slice(-3)) ? 'secondaryBubbleTailEmoji' : 'secondaryBubbleTail')}></div><div key={c.id} className={c.person === 'a' ? 'primaryBubble' : 'secondaryBubble'}>{c.chat}</div><div className={c.person === 'a' ? (/\p{Extended_Pictographic}/u.test(c.chat.slice(-3)) ? 'primaryBubbleTailEmoji' : 'primaryBubbleTail') : ''}></div></div></div></div>))} 
    </div>
  );
};

export default AliciaMessages;
