export const InternalLinkingStrategy = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <script></div>
</script>
        `,
      }}
    />
  );
};
