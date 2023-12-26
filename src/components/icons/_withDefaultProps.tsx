export default function withDefaultProps(
  Component: React.ComponentType<IconProps>,
) {
  return function IconWithDefaultProps(props: IconProps) {
    return <Component {...props} size={24} />;
  };
}
