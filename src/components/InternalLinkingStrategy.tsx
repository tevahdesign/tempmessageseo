export const InternalLinkingStrategy = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2885050972904135"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-2885050972904135"
     data-ad-slot="9124471463"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
        `,
      }}
    />
  );
};
