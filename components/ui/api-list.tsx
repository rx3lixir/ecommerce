"use client";

import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import { ApiAlert } from "@/components/api-alert";

interface ApiListProps {
  entityName: string;
  entityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({
  entityName,
  entityIdName,
}) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <ApiAlert
        title='GET'
        variant='public'
        descrition={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title='GET'
        variant='public'
        descrition={`${baseUrl}/${entityName}/${entityIdName}`}
      />
      <ApiAlert
        title='POST'
        variant='admin'
        descrition={`${baseUrl}/${entityName}/${entityIdName}`}
      />
      <ApiAlert
        title='PATCH'
        variant='admin'
        descrition={`${baseUrl}/${entityName}/${entityIdName}`}
      />
      <ApiAlert
        title='DELETE'
        variant='admin'
        descrition={`${baseUrl}/${entityName}/${entityIdName}`}
      />
    </>
  );
};
