import * as React from "react";
import { useEffect } from "react";

const config = {
  widgetDomain: "https://app.qa.fastn.ai/widget",
  origin: encodeURIComponent(window.location.origin),
  path: encodeURIComponent(window.location.pathname + window.location.search),
  customAuth: true,
  projectId: "3d600215-89e3-423f-9844-2ad7c19128cd",
  tenantId: "test",
  authToken: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhTTB5UExrREQxZkFiTzlyRlQxVC1BcnktanJCUjE2YzlSbDJyV3M0OHhvIn0.eyJleHAiOjE3MjgzMjMxMzAsImlhdCI6MTcyODMyMjgzMCwiYXV0aF90aW1lIjoxNzI4MzIxMjk2LCJqdGkiOiIzMzYwNWQ1ZC1kOTRmLTQ5MzMtODU1Mi00NjhlZWQ1MDdiNDgiLCJpc3MiOiJodHRwczovL2F1dGgubGl2ZS5mYXN0bi5haS9yZWFsbXMvZmFzdG4iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiY2ZiYzBlNTctY2FiZi00ZTI3LTkwMjgtMjlmM2RiNjZjZmFiIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZmFzdG4tYXBwIiwic2Vzc2lvbl9zdGF0ZSI6ImYwZTU3NGNkLTk3OTItNDkwNC1hMTM2LWYzZjY4ZTU1NzY5MSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiUFJPSkVDVCM0NDJiMmMyZS1jYzMzLTQwNDQtYTg3MS1iM2FhNTJhMmYxNWYjYWRtaW4iLCJPUkcjNzZkYTA3ZGYtNWQ5MC00ZDhmLWIzZTctNTYzNWUzZDM5ZGQ3I2FkbWluIiwiUFJPSkVDVCMwZjNmYjk0Mi1iYTVmLTQ2MzgtODQ3NS1lZmRlNGRiNTE1YjgjYWRtaW4iLCJQUk9KRUNUIzJlMTJjNDI3LTk3MmEtNDM2NS1hN2Y5LWJhMjA4MjJhZmQxMiNhZG1pbiIsIlBST0pFQ1QjNTQyZTA1NDktY2Y1OC00M2Y0LWIyODUtZTUzYmE0MzliYzk4I2FkbWluIiwiUFJPSkVDVCM2N2UyOWRhNC1mZDRiLTQ1ZDktYjU0ZC0yYzA3N2FjODAyMDEjYWRtaW4iLCJQUk9KRUNUIzNkNjAwMjE1LTg5ZTMtNDIzZi05ODQ0LTJhZDdjMTkxMjhjZCNhZG1pbiIsIlBST0pFQ1QjMTBhZWQxNzYtYjlkMC00Njc5LWJlMzctMWViYTM5ZGJmMGMwI2FkbWluIiwib2ZmbGluZV9hY2Nlc3MiLCJQUk9KRUNUI2I4MDI2NDdjLWNhZGMtNDM4Mi1iZDYxLTk1MThmMTRjMjliOSNhZG1pbiIsIlBST0pFQ1QjYjZjN2RiNDMtNTM4Yy00NWMxLWE2MDAtNDgxYjNlYTVhZDVmI2FkbWluIiwidW1hX2F1dGhvcml6YXRpb24iLCJQUk9KRUNUIzIwZWZmZWU4LTQ1NDItNDVhOS1iOWQyLTViMDNkNDYxNGY0NCNhZG1pbiIsImRlZmF1bHQtcm9sZXMtZmFzdG4iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiZjBlNTc0Y2QtOTc5Mi00OTA0LWExMzYtZjNmNjhlNTU3NjkxIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJKZWhhZCBBbG1hbGlraSIsInByZWZlcnJlZF91c2VybmFtZSI6ImplaGFkQGZhc3RuLmFpIiwiZ2l2ZW5fbmFtZSI6IkplaGFkIiwiZmFtaWx5X25hbWUiOiJBbG1hbGlraSIsImVtYWlsIjoiamVoYWRAZmFzdG4uYWkifQ.qebzp6X9WUTrgDSfXy5UpGCVNho6SDo6maK0crFYNYBmrT3IimXC9tztREVsQihFZXY-5ThUdj9tiFzlPvPnTtSCgq0L2NGPQXkUyIVqHWd79cRScoIl66dGTzosohq0sPAvGh7-baZ2Ou0jKXiPW6LH6fSw2YJiEVCNhcXeXmQBOYIhBcQT-APmJ113gU4ChHcnQ-8esKHj4SaM4kb9pgNCAJLrYQfSb5sZLLyN3L_PpbitzpH6cYtkZ8XvcsiGfo7xyHWc9IMBE3xLahetoeiXTHbPf9EQjONoyc5nYjtXHkTRmkJxnW7n-mWqF7dRCHKmlFG8SsV48mn-qztRwA",
  theme: "light",
};

const Widget = () => {
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleIframeLoad = () => {
      iframeRef?.current?.contentWindow?.postMessage(
        {
          eventType: "update_fastn_auth_token",
          authToken: config.authToken,
        },
        config.widgetDomain
      );
    };

    iframeRef?.current?.addEventListener("load", handleIframeLoad);
    return () => {
      iframeRef?.current?.removeEventListener("load", handleIframeLoad);
    };
  }, [iframeRef.current]);

  useEffect(() => {
    const handleMessage = (event) => {
      if (
        event.origin === config.widgetDomain &&
        event.data.eventType === "update_fastn_iframe_height"
      ) {
        const iframe = iframeRef.current;
        const height = event.data.height;
        if (iframe) iframe.style.height = height + "px";
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div
      style={{
        marginLeft: "auto",
        marginTop: "200px",
        width: "1200px",
      }}
    >
      <iframe
        id="widget-iframe"
        ref={iframeRef}
        src={`${config.widgetDomain}?origin=${config.origin}&path=${config.path}&customAuth=${config.customAuth}&projectId=${config.projectId}&tenantId=${config.tenantId}&theme=${config.theme}`}
        title="Fastn Widget"
        width="100%"
        min-height="800px"
      ></iframe>
    </div>
  );
};

export default Widget;
