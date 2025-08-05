'use client';

import { sidebarLinks } from '@/constants';
import { SignedIn, SignOutButton, useClerk, useAuth } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

function LeftSideBar() {
  const router = useRouter();
  const pathname = usePathname();

  const { signOut } = useClerk();
  const { userId } = useAuth();

  const handleLogout = async () => {
    await signOut();
    router.push('/sign-in');
  };

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          // Build the correct href
          const href =
            link.route === '/profile' && userId
              ? `/profile/${userId}`
              : link.route;

          // Check if this link is active (support dynamic profile route)
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === href;

          return (
            <Link
              href={href}
              key={link.label}
              className={`leftsidebar_link ${isActive ? 'bg-primary-500' : ''}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />

              <p className="text-light-1 max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 px-6">
        <SignedIn>
          <div className="flex cursor-pointer gap-4 p-4" onClick={handleLogout}>
            <Image
              src="/assets/logout.svg"
              alt="logout"
              width={24}
              height={24}
            />
            <p className="text-light-2 max-lg:hidden">LogOut</p>
          </div>
        </SignedIn>
      </div>
    </section>
  );
}

export default LeftSideBar;
