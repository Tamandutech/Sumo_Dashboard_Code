type _BaseIconProps = import("lucide-react-native").LucideProps;

type IconProps = Omit<_BaseIconProps, "size" | "color"> & {
  size?: _BaseIconProps["size"];
  color?: _BaseIconProps["color"];
};
