import * as React from "react";
import { useEffect } from "react";

const config = {
  widgetDomain: "http://localhost:3000",
  origin: encodeURIComponent(window.location.origin),
  path: encodeURIComponent(window.location.pathname + window.location.search),
  customAuth: true,
  projectId: "d3b4df8b-d655-4938-b8b2-31443324bc7a",
  tenantId: "14ae06a3-854e-47a0-a764-02efdec180ee",
  authToken:
    "eyJhbGciOiJSUzI1NiIsImtpZCI6InRlY2hwdWxzZS1ldXN0YWdpbmciLCJ0eXAiOiJKV1QifQ.eyJhcHBfc2l0ZSI6IkRBQVNfVEVTVCIsImF1ZCI6WyJodHRwczovL3RlY2hwdWxzZS1ldXN0YWdpbmcuaHBicC5pbyIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCJdLCJhdXRob3JpdHkiOiJodHRwczovL29hdXRoLmhwYnAuaW8iLCJjbGllbnRfaWQiOiJiMWMyMDA2Ni1jMGVjLTQ3ODktODZlNC1lNDU0YWYxMjIwNmQiLCJkaXNwbGF5X25hbWUiOiJNU1AwNiBFVSIsImVtYWlsIjoiaHB0cG0ubXVsdGlwYXNzbXNwMDZAaHBtc3FhLm1haWxpbmF0b3IuY29tIiwiZW52aXJvbm1lbnRfaWQiOiI2NjYzNGRjMy0yYzhlLTRhMjEtOTlmZC1hNWM3Njk1ZjY3ZmIiLCJleHAiOjE2NzYyOTk1MjUsImZhbWlseV9uYW1lIjoiRVUiLCJnaXZlbl9uYW1lIjoiTVNQMDYiLCJocGlkX3Rva2VuIjoiZXlKcmFXUWlPaUpCWTJObGMzTWdWRzlyWlc0Z1UybG5ibWx1WnlCTFpYa2dVR0ZwY2lCS2RXeDVJREl3TVRraUxDSmhiR2NpT2lKU1V6VXhNaUo5LmV5SnpkV0lpT2lKVmMyVnljMXd2YURWMWR6TnVPRFl4TkcxdGJXZHlhV054ZEdzME4yTnVkM3AxWm5OM2RIQWlMQ0p1WW1ZaU9qRTJOell5T1RVNE16a3NJbk5qYjNCbElqb2liM0JsYm1sa0lIVnpaWEl1Y0hKdlptbHNaUzV5WldGa0lHOW1abXhwYm1WZllXTmpaWE56SUdWdFlXbHNJSFZ6WlhJdWNISnZabWxzWlM1M2NtbDBaU0lzSW1semN5STZJbWgwZEhCek9sd3ZYQzlrYVhKbFkzUnZjbmt1YVdRdWFIQXVZMjl0SWl3aVpYaHdJam94TmpjMk1qazJOems1TENKcFlYUWlPakUyTnpZeU9UVTRPVGtzSW1Oc2FXVnVkRjlwWkNJNklreE1TV2hyUWpsYWVVSlRaMUJ0YzB0NWIyWlZOVWxwT0VoalluRk1RV1I2SWl3aWFuUnBJam9pWVM1WmJFWk5YM2NpZlEuT19GckFXeVRGTElkUW5sVGZqTkNCbkdOeGZwZGZvWE8xU0ZDbFNLNFF4Q1gwZmtsQ3RmaWFCbEQ5QXdaem0xUnJWclU2bW5FaHNzNkRoLWxsRTNHWmxNRzBjaU90TEJlTWN6cXE5bWdZRDZ3SVVCd1VUSGhocDJ5QVdiOVk0bU0yeGY4R1FzVF9UdUE3QmN3YWdiVXg1aGxSRnRNb0J5S3IxZjAxM1cwcmxET082VVczaFVCTXpiWFd2NDBnZFlBRFhxMkVjS1VjSk9ybnQyX2wxdTYzcURWQ1JUcmhBaTJRT1FFSlVtdDdRRDVLV0Q4RnFwQkFucGdhMXprWDNWWlZGODBuWmdtUUhSOUt2LUFRQTdsRHFXaTdfc1lod0tHX2dFVmlxbVhUaVh2VS1TdDNLRGc4ejJHa050VWZTcDVOZ3VTQml0aW5hZDNIWml4Nm5LTDBBIiwiaWF0IjoxNjc2Mjk1OTI1LCJpZHAiOiJocGlkX3Byb2QiLCJpc3MiOiJvYXV0aC5ocGJwLmlvIiwianRpIjoiZjE5NmE3NTktNGM0Zi00MzNmLTgyOWEtMjI1NjExYjE2MjI5IiwibmFtZSI6Ik1TUDA2IEVVIiwibm9uY2UiOiJub25jZSIsIm9yZ2FuaXphdGlvbiI6Ik1TUDA2IEFkbWluIiwicGFyZW50IjoiNzNkZGQ0YzktNTUyMC0xMWU4LTkyODctMGFlYzU1MGEzYmUwIiwic2NwIjpbIm9mZmxpbmUiXSwic3ViIjoiMjg4ZDQ0MjQtYzQ0Zi00MzQzLWIyYmItMWYyNjI0YjliMDgyIiwic3ViX2lkcCI6ImhwaWQiLCJ0ZW5hbnQiOiIxNGFlMDZhMy04NTRlLTQ3YTAtYTc2NC0wMmVmZGVjMTgwZWUiLCJ0ZW5hbnRfaWQiOiJ0ZWNocHVsc2UtZXVzdGFnaW5nIiwidGVuYW50X3N1YnR5cGUiOlsiTVNQIl0sInRlbmFudF90eXBlIjoiTVNQIiwidHlwZSI6InVzZXIiLCJ1c2VyIjoiMjg4ZDQ0MjQtYzQ0Zi00MzQzLWIyYmItMWYyNjI0YjliMDgyIiwidXNlcl9pZCI6IjI4OGQ0NDI0LWM0NGYtNDM0My1iMmJiLTFmMjYyNGI5YjA4MiIsInZlciI6IjEuMCIsInZlcmlmaWNhdGlvbl9lbmFibGVkIjpmYWxzZX0.sJQfuq1YyWE1SPH9XTZJhvKUyHD92cDlS04qMsFHD7jUXuFgC5BGagTPBH8XbZNw2ymr42oXpTjhHDm3NscJLQBgO-26hV_TaVZGrIB0e-S7sIi-Ehx6uoYNRgs03o8oXXqcyF1Th0-ObK27FayIxhyxHUJWHQegUUw0448uAdB6O8d-AxVw84mNRxY-9ZbWx8lMUP0-LOsxfeKEVY-LXvIX4NY-g8VcvGnZyOWP-U1O4q6q1P9pmUqkM3CXibBH7NXi_5_4kdMRZLsCYA2zH_c2QMhU1-s6oCbYyvF7xjgE50vBc3QewnktMK0sN9dvlG-uAfyNSg4SKwHkBnWAjw",
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
