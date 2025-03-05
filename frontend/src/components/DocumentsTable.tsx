import React from 'react';

type Document = {
  id: number;
  title: string;
  databaseId: string;
};

type Props = {
  Docs: Document[];
};

const sampleDocs = [
    { id: "d4f7b2a1-8c9e-4d78-bd3e-46b35a2a1f13", title: "Project Proposal", databaseId: "Project_DB" },
    { id: "a6e1c0f3-2b9d-4e1d-bc4a-8c50aef4f34a", title: "Financial Statement Q1", databaseId: "Finance_DB" },
    { id: "f9d2b6e8-7a4b-423f-bdc1-5e2b843e98c2", title: "Marketing Strategy", databaseId: "Marketing_DB" },
    { id: "c3a1e5d7-9b4f-44e2-901f-47a74c3e521b", title: "Employee Handbook", databaseId: "HR_DB" },
    { id: "b7f4c8d9-1d2e-4e3b-b5f6-8a9d7c2e3f1a", title: "Customer Insights Report", databaseId: "Analytics_DB" },
    { id: "e6b9f2d4-5c8e-4f1a-a2d3-7b9c8e5f4a2b", title: "Quarterly Budget Review", databaseId: "Finance_DB" },
   
  ];

const DocumentsTable = () => {
  return (
    <div className="p-4 bg-[#202226] rounded-lg">
      <table className="w-full border-collapse ">
        <thead>
          <tr className="bg-gray-500 rounded-md text-white text-left text-sm">
            <th className="border border-gray-600 px-4 py-2">ID</th>
            <th className="border border-gray-600 px-4 py-2">Title</th>
            <th className="border border-gray-600 px-4 py-2">Database ID</th>
          </tr>
        </thead>
        <tbody>
          {sampleDocs.length > 0 ? (
            sampleDocs.map((doc) => (
              <tr key={doc.id} className="text-sm text-white text-left">
                <td className=" border-gray-600 px-4 py-2">{doc.id}</td>
                <td className=" border-gray-600 px-4 py-2">{doc.title}</td>
                <td className=" border-gray-600 px-4 py-2">{doc.databaseId}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center p-4 text-gray-500">
                No documents available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentsTable;
