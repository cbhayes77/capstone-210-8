export default function Section({ className = "", as = "section", children, ...props }) {
  const Component = as;
  return (
    <Component className={`py-16 sm:py-20 lg:py-24 ${className}`} {...props}>
      {children}
    </Component>
  );
}
