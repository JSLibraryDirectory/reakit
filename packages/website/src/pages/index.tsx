// TODO: Refactor this mess
import { css } from "emotion";
import { Link } from "gatsby";
import * as React from "react";
import { FiGithub } from "react-icons/fi";
import { MdStar } from "react-icons/md";
import { Button } from "reakit";
import { usePalette } from "reakit-system-palette/utils";
import Heading from "../components/Heading";
import HomePlayground from "../components/HomePlayground";
import Paragraph from "../components/Paragraph";
import SEO from "../components/SEO";
import Spacer from "../components/Spacer";
import Accessible from "../icons/Accessible";
import Composable from "../icons/Composable";
import Customizable from "../icons/Customizable";
import TinyFast from "../icons/TinyFast";
import image from "../images/components.svg";
import pattern from "../images/pattern.svg";

function useGitHubStars() {
  const [stars, setStars] = React.useState<number | null>(null);
  React.useEffect(() => {
    fetch("https://api.github.com/repos/reakit/reakit")
      .then(result => result.json())
      .then(response => setStars(response.stargazers_count));
  }, []);
  return stars;
}

export default function IndexPage() {
  const stars = useGitHubStars();
  const link = usePalette("link");
  return (
    <>
      <SEO title="Reakit" />
      <div
        className={css`
          width: 100%;
          min-height: 500px;
          height: 90vh;
          background: linear-gradient(
            144deg,
            #7b60ff,
            #c050ee 15%,
            #c050ee 30%,
            #5640dd
          );
          @media (max-width: 768px) {
            height: auto;
            background: linear-gradient(
              144deg,
              #5640dd,
              #c050ee 60%,
              #c050ee 75%,
              #7b60ff
            );
          }
        `}
      >
        <div
          className={css`
            height: 100%;
            background-image: url(${pattern});
            background-size: 6%;
          `}
        >
          <div
            className={css`
              position: relative;
              margin: 0 auto;
              padding: 16px 56px;
              max-width: 1200px;
              height: calc(100% + 68px);
              box-sizing: border-box;
              background: url(${image}) right center no-repeat;
              background-size: 50%;
              z-index: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              @media (max-width: 768px) {
                padding: 8px;
                background-position: center top var(--header-height, 60px);
                background-size: 65%;
                height: auto;
              }
            `}
          >
            <h1
              className={css`
                font-size: 3.2em;
                font-weight: 400;
                line-height: 1.1;
                padding-bottom: 32px;
                color: white;
                width: 10em;
                margin: 0;
                @media (max-width: 768px) {
                  font-size: 1.8em;
                  width: auto;
                  text-align: center;
                  margin: calc(var(--header-height, 60px) + 47%) 0 40px 0;
                }
              `}
            >
              Build{" "}
              <strong
                className={css`
                  font-weight: 500;
                `}
              >
                accessible
              </strong>{" "}
              rich web apps with React
            </h1>
            <div
              className={css`
                display: grid;
                grid-gap: 20px;
                grid-auto-flow: column;
                justify-content: start;
                a {
                  font-weight: 500;
                  text-transform: uppercase;
                }
                @media (max-width: 768px) {
                  justify-content: center;
                  grid-auto-flow: row;
                  grid-gap: 8px;
                }
              `}
            >
              <Button
                as={Link}
                to="/docs/get-started/"
                unstable_system={{ palette: "white" }}
                className={css`
                  color: #484a7a;
                  font-size: 14px;
                  box-shadow: rgba(8, 35, 51, 0.1) 0px 2px 4px;
                  padding: 0px 19px;
                `}
              >
                Get started
              </Button>
              <Button
                as={Link}
                to="/docs/button/"
                unstable_system={{ palette: "white", fill: "outline" }}
                className={css`
                  background: #484a7a;
                  border-color: #484a7a;
                  font-size: 14px;
                  box-shadow: rgba(8, 35, 51, 0.1) 0px 2px 4px;
                  padding: 0px 19px;
                  height: 40px;
                `}
              >
                Components
              </Button>
            </div>
            <div
              className={css`
                margin-top: 24px;
                display: grid;
                grid-auto-flow: column;
                justify-content: start;
                grid-gap: 20px;
                @media (max-width: 768px) {
                  justify-content: center;
                }
                a {
                  display: inline-flex;
                  align-items: center;
                  text-transform: uppercase;
                  color: white;
                  text-decoration: none;
                  font-size: 0.875em;
                  &:hover {
                    text-decoration: underline;
                  }
                  svg {
                    font-size: 1.5em;
                  }
                }
              `}
            >
              <a href="https://github.com/reakit/reakit">
                <FiGithub />
                <Spacer width={8} />
                View Reakit on GitHub
              </a>
              {stars && (
                <a href="https://github.com/reakit/reakit/stargazers">
                  <MdStar />
                  <Spacer width={8} />
                  {stars}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={css`
          padding: 120px 0 140px;
          background: linear-gradient(
            144deg,
            #f9f9f9 calc(100% - 480px),
            #fff calc(100% - 480px)
          );
          @media (max-width: 768px) {
            padding: 32px 0 72px;
          }
        `}
      >
        <div
          className={css`
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-gap: 32px;
            max-width: 1200px;
            padding: 0 56px;
            box-sizing: border-box;
            margin: 0 auto;
            @media (max-width: 1024px) {
              grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            }
            @media (max-width: 768px) {
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              padding: 0 24px;
              grid-gap: 24px;
            }
            &&& {
              a {
                text-decoration: none;
                color: #444;

                h2 {
                  font-size: 1.5em;
                  display: grid;
                  grid-gap: 8px;
                  grid-auto-flow: column;
                  align-items: center;
                  justify-content: start;
                }

                span {
                  font-weight: 500;
                  color: ${link};
                  white-space: nowrap;
                }
                &:hover span,
                &:hover h2 {
                  text-decoration: underline;
                }
              }
            }
          `}
        >
          <Link to="/docs/accessibility/">
            <Heading as="h2">
              <Accessible />
              Accessible
            </Heading>
            <Paragraph>
              Reakit strictly follows <strong>WAI-ARIA 1.1</strong> standards.
              All components come with proper attributes and keyboard
              interactions out of the box. <span>Learn more</span>
            </Paragraph>
          </Link>
          <Link to="/docs/composition/">
            <Heading as="h2">
              <Composable />
              Composable
            </Heading>
            <Paragraph>
              Reakit is built with composition in mind. You can leverage any
              component or hook to create new things. <span>Learn more</span>
            </Paragraph>
          </Link>
          <Link to="/docs/styling/">
            <Heading as="h2">
              <Customizable />
              Customizable
            </Heading>
            <Paragraph>
              Reakit components are unstyled by default in the core library.
              Each component returns a single HTML element that accepts all HTML
              props, including <code>className</code> and <code>style</code>.{" "}
              <span>Learn more</span>
            </Paragraph>
          </Link>
          <Link to="/docs/bundle-size/">
            <Heading as="h2">
              <TinyFast />
              Tiny & Fast
            </Heading>
            <Paragraph>
              Reakit components are built with modern React and follow best
              practices. Each imported component will add from a few bytes to up
              to <code>3 kB</code> into your bundle. <span>Learn more</span>
            </Paragraph>
          </Link>
        </div>
      </div>
      <HomePlayground />
    </>
  );
}
