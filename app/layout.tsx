import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import SideBar from '@/components/SideBar';
const inter = Plus_Jakarta_Sans({ subsets: ['latin'] });
import { SessionProvider } from '@/components/SessionProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import ClientProvider from '@/components/ClientProvider';

import Login from '@/components/Login';

export const metadata: Metadata = {
  title: 'ChatGPT',
  description: 'GPT-3.5 Messenger Powered by Open AI API',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  console.log(session);

  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <div>
              <Login />
            </div>
          ) : (
            <div className="flex">
              <div
                className="bg-[#202123] max-w-xs h-screen overflow-y-auto
          md:min-w-[20rem]"
              >
                <SideBar />
              </div>

              {/* ClientProvider -  Notification */}
              <ClientProvider />

              <div className="bg-[#343541] flex-1"> {children} </div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
