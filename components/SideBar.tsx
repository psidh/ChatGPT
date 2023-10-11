'use client';
import { useSession , signOut} from 'next-auth/react';
import NewChat from './NewChat';
import {useCollection} from 'react-firebase-hooks/firestore';
import { query, collection, orderBy } from 'firebase/firestore';
import {db} from '../firebase';
import ChatRow from '../components/ChatRow';

function SideBar() {
  const { data: session } = useSession();
  
  const [chats, loading, error] = useCollection(
    session && query(collection(db, 'users', session.user?.email!, 'chats'), 
    orderBy('createdAt', 'asc'))
  );

  const imageSrc = session?.user?.image || '';

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1 ">
        <div>
          {/* new chat */}
          <NewChat />

          <div>{/* model selection */}</div>

          {/* Map through the  chatrows*/}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image || ''}
          alt="image"
          className="h-12 w-12 mx-auto
      rounded-full cursor-pointer mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
}

export default SideBar;
