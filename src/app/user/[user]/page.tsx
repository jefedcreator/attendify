import Banner from "@components/banner/Banner";
import ExploreCollections from "@components/exploreCollections/ExploreCollections";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: { user: string };
}) {
  return {
    title: `Attendify - User ${params.user}`,
    description: `${params.user} prezent collections.`,
  };
}

const exploreUser = ({ params }: { params: { user: string } }) => {
  return (
    <section className="container w-[90%] mx-auto mb-32 relative">
      <Banner header="User Collection" add={params.user} isDashboard={true} />
      <ExploreCollections address={params.user} />
    </section>
  );
};

export default exploreUser;
