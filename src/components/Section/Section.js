import { SectionStyle, TitleSection } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionStyle>
      <TitleSection>{title}</TitleSection>
      {children}
    </SectionStyle>
  );
}
