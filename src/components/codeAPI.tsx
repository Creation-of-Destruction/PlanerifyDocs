import { Card, CardContent } from "@/components/ui/card.tsx";

interface ListAPIProps {
  title?: string;
  description?: string;
  is_required_param?: boolean;
  url?: string;
  src?: string;
  type?: string;
  is_logo?: boolean;
  response_returned?: string;
  response_success?: string;
  response_error?: string;
  response_success_types?: string;
  response_success_json?: string;
  response_error_json?: string;
  required_param?: string;
}

export const CodeAPI = ({
  title,
  description,
  type,
  is_logo,
  is_required_param,
  required_param,
  src,
  url,
  response_returned,
  response_success,
  response_error,
  response_success_json,
  response_error_json,
  response_success_types,
}: ListAPIProps) => {
  const CodeBlock = ({
    content,
    color = "#d6deeb",
  }: {
    content?: string;
    color?: string;
  }) =>
    content ? (
      <pre
        className="overflow-x-auto my-3 mb-6 rounded-lg bg-[#011627] p-4 text-xs border border-[#1e2d3d]"
        style={{ color }}
      >
        <code>{content}</code>
      </pre>
    ) : null;

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-card text-card-foreground flex flex-col gap-6 py-0 rounded-xl border-0 sm:border sm:shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CardContent className="p-0 sm:p-8">
            <div className="flex items-center gap-4">
              {is_logo && src && (
                <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                  <img alt="Logo" className="object-cover" src={src} />
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold">{type}</h3>
                <p className="text-foreground">{title}</p>
              </div>
            </div>

            {(description || url) && (
              <p className="text-foreground text-base/relaxed mt-4">
                {description}{" "}
                {url && (
                  <code className="font-medium text-xs sm:text-sm text-primary">
                    {url}
                  </code>
                )}
              </p>
            )}
          </CardContent>

          <div className="bg-muted/30 w-full p-4 sm:p-8">
            {is_required_param && (
              <>
                <h2 className="text-sm font-medium">{required_param}</h2>
                <CodeBlock content="Authorization: Bearer <YourToken>" />
              </>
            )}

            {response_returned && (
              <h2 className="text-sm font-medium">{response_returned}</h2>
            )}
            <CodeBlock content={response_success_types} />

            {response_success && (
              <>
                <h2 className="text-sm font-medium">{response_success}</h2>
                <CodeBlock content={response_success_json} color="#4ade80" />
              </>
            )}

            {response_error && (
              <>
                <h2 className="text-sm mt-6 font-medium">{response_error}</h2>
                <CodeBlock content={response_error_json} color="#f87171" />
              </>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};
