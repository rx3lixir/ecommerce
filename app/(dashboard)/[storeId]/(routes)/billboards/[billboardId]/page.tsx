import prismadb from "@/lib/prismadb";

const BillBoardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const billboard = await prismadb.billBoard.findUnique({
    where: {
      id: params.billboardId,
    },
  });

  return <div>Existing Billboard: {billboard?.label} </div>;
};

export default BillBoardPage;
