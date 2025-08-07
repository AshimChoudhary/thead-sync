// app/communities/page.tsx
import { fetchCommunities } from '@/lib/actions/community.actions';
import Pagination from '@/components/shared/Pagination';
import CommunityCard from '@/components/cards/CommunityCard';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

export default async function Page() {
  // Get request headers and construct full URL
  const headersList = await headers(); // ✅ Await headers()
  const host = headersList.get('host');
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const url = `${protocol}://${host}${
    headersList.get('x-url') || '/communities'
  }`;

  // Parse query parameters using the URL API
  const { searchParams } = new URL(url);
  const searchString = searchParams.get('q') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);

  const result = await fetchCommunities({
    searchString,
    pageNumber: page,
    pageSize: 25,
  });

  return (
    <>
      <h1 className="head-text mb-10">Communities</h1>

      <section className="mt-9 flex flex-wrap gap-4">
        {result.communities.length === 0 ? (
          <p className="no-result">No communities found</p>
        ) : (
          result.communities.map((community) => (
            <CommunityCard key={community.id} community={community} />
          ))
        )}
      </section>

      <Pagination path="communities" pageNumber={page} isNext={result.isNext} />
    </>
  );
}
