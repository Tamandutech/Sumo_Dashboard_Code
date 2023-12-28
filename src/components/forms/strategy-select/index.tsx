import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@gluestack-ui/themed";
import React from "react";

export default function StrategySelect() {
  return (
    <Select>
      <SelectTrigger variant="outline" size="md">
        <SelectInput placeholder="Selecione a estratégia" />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          <SelectItem label="Frentão" value="a" />
          <SelectItem label="Curvão" value="b" />
          <SelectItem label="Curva" value="c" />
          <SelectItem label="Rezinha" value="d" />
          <SelectItem label="Curvinha" value="f" />
          <SelectItem label="Retinho" value="g" />
          <SelectItem label="Direto" value="x" />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}
