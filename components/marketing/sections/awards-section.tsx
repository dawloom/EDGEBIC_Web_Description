'use client';

import * as React from 'react';

export function AwardsSection(): React.JSX.Element {
  const awards = [
    {
      name: 'Capterra',
      link: 'https://www.capterra.com/p/9402/Resource-Manager-DB/',
      image: '/images/shortlist-capterra.png',
      alt: 'Capterra Reviews'
    },
    {
      name: 'Software Advice',
      link: 'https://www.crazyegg.com/',
      image:
        'https://ceblog.s3.amazonaws.com/wp-content/uploads/2025/06/12004512/CrazyEgg-Main-Logo.svg',
      alt: 'Crazy Egg'
    },
    {
      name: 'Forecast',
      link: 'https://www.forecast.app/',
      image:
        'https://cdn.prod.website-files.com/6630b815e08749a4ac273a72/689259acabc12e6e0caed35f_Forecast.app-2025.png',
      alt: 'Forecast'
    },
    {
      name: 'G2 Best Meets Requirements',
      link: 'https://www.g2.com/',
      image: '/images/g2-best-meets-requirements.png',
      alt: 'G2 Best Meets Requirements'
    },
    {
      name: 'GetApp',
      link: 'https://www.getapp.com/',
      image: '/images/getapp-badge.png',
      alt: 'GetApp Badge'
    },
    {
      name: 'Top Performer Software',
      link: 'https://www.capterra.com/',
      image: '/images/top-performer-software-1.png',
      alt: 'Top Performer Software'
    },
    {
      name: 'ERP Leader',
      link: 'https://www.capterra.com/',
      image: '/images/erp-leader.png',
      alt: 'ERP Leader'
    },
    {
      name: 'Katana',
      link: 'https://katanamrp.com/',
      image:
        'data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibWFpbi1sb2dvIG9yYW5nZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTczLjYxIDEwOC43NiI+PGc+PHBhdGggY2xhc3M9Im1haW4tbG9nby1maWxsIiBkPSJNMjU4LjYxLDI2YzYuNiw2Ljc3LDkuOTEsMTYuMjIsOS45MSwyOC4zNHY1Mi43OWgtMjIuNzR2LTQ5LjdjMC03LjE1LTEuNzktMTIuNjQtNS4zNi0xNi40OS0zLjU3LTMuODQtOC40NS01Ljc3LTE0LjYyLTUuNzdzLTExLjIzLDEuOTItMTQuODYsNS43N2MtMy42MywzLjg0LTUuNDQsOS4zNC01LjQ0LDE2LjQ5djQ5LjdoLTIyLjc0VjE3LjE1aDIyLjc0djExLjIxYzMuMDMtMy45LDYuOS02Ljk2LDExLjYxLTkuMTgsNC43MS0yLjIyLDkuODgtMy4zMywxNS41MS0zLjMzLDEwLjcyLDAsMTkuMzgsMy4zOSwyNS45OSwxMC4xNVoiPjwvcGF0aD48cGF0aCBjbGFzcz0ibWFpbi1sb2dvLWZpbGwiIGQ9Ik0zMTAuNDUsMGgtMjIuOXYxNy4xNWgtMTIuODF2MTguNjhoMTIuODF2NDMuMzdjMCwxOC42Myw5LjU4LDI3Ljk0LDI4Ljc1LDI3Ljk0aDE0LjI5di0xOS4xNmgtMTAuNTZjLTMuNDcsMC01LjkzLS42OC03LjM5LTIuMDMtMS40Ni0xLjM1LTIuMTktMy41NS0yLjE5LTYuNTh2LTQzLjUzaDIwLjE0di0xOC42OGgtMjAuMTRWMFoiPjwvcGF0aD48cGF0aCBjbGFzcz0ibWFpbi1sb2dvLWZpbGwiIGQ9Ik00NjIuMjQsMGgtMjIuOXYxNy4xNWgtMTIuODF2MTguNjhoMTIuODF2NDMuMzdjMCwxOC42Myw5LjU4LDI3Ljk0LDI4Ljc1LDI3Ljk0aDE0LjI5di0xOS4xNmgtMTAuNTZjLTMuNDcsMC01LjkzLS42OC03LjM5LTIuMDMtMS40Ni0xLjM1LTIuMTktMy41NS0yLjE5LTYuNTh2LTQzLjUzaDIwLjE0di0xOC42OGgtMjAuMTRWMFoiPjwvcGF0aD48cG9seWdvbiBjbGFzcz0ibWFpbi1sb2dvLWZpbGwiIHBvaW50cz0iMjMuMDIgMTA3LjE4IDIzLjAyIDU4Ljk0IDU4LjU2IDEwNy4xOCA4Ny4yMyAxMDcuMTggNDQuOTUgNTIuMjggODYuMTQgLjA0IDU4Ljc3IC4wNCAyMy4wMiA0Ni45MiAyMy4wMiAuMDQgMCAuMDQgMCAxMDcuMTggMjMuMDIgMTA3LjE4Ij48L3BvbHlnb24+PHBhdGggY2xhc3M9Im1haW4tbG9nby1maWxsIiBkPSJNMTY1Ljk4LDMzLjcyYy0zLjQ3LTUuODUtOC4yNi0xMC4zNC0xNC4zNy0xMy40OC02LjEyLTMuMTQtMTIuOTctNC43MS0yMC41NC00Ljcxcy0xNCwxLjQ0LTE5LjksNC4zYy01LjksMi44Ny0xMC42Nyw2Ljg4LTE0LjI5LDEyLjAyLTMuMyw0LjY4LTUuNTMsOS45NC02LjcyLDE1Ljc0aDIyLjgxYzEuMDEtMy43MiwyLjg2LTYuNzEsNS41OS04LjkyLDMuMTQtMi41NCw3LjA5LTMuODIsMTEuODYtMy44Miw1LjQxLDAsOS42NiwxLjcxLDEyLjc1LDUuMTIsMy4wOSwzLjQxLDQuNzQsNy45OSw0Ljk1LDEzLjcyaC0yMi45Yy0xMi40NSwwLTIxLjc5LDIuNjYtMjguMDIsNy45Ni02LjIzLDUuMzEtOS4zNCwxMi4xMy05LjM0LDIwLjQ2LDAsNS4yLDEuMyw5LjgsMy45LDEzLjgxLDIuNiw0LjAxLDYuMTcsNy4xNSwxMC43Miw5LjQyLDQuNTUsMi4yNyw5LjY0LDMuNDEsMTUuMjcsMy40MSw2LjUsMCwxMi41Ni0xLjM4LDE4LjE5LTQuMTQsNS42My0yLjc2LDkuNjktNi4yLDEyLjE4LTEwLjMxdjEyLjgzaDIzLjA2di01Mi43OWMwLTcuOS0xLjczLTE0Ljc4LTUuMi0yMC42M1pNMTQ4LjExLDY5LjEzYzAsNC40NC0xLjE5LDguMjgtMy41NywxMS41My0yLjM4LDMuMjUtNS4zOSw1LjY4LTkuMDEsNy4zMS0zLjYzLDEuNjItNy4zNCwyLjQ0LTExLjEzLDIuNDQtNC4yMiwwLTcuNS0uOTctOS44My0yLjkyLTIuMzMtMS45NS0zLjQ5LTQuNTUtMy40OS03LjhzMS4yNy02LjA2LDMuODItOC4xMmMyLjU0LTIuMDYsNi40MS0zLjA5LDExLjYxLTMuMDloMjEuNnYuNjVaIj48L3BhdGg+PHBhdGggY2xhc3M9Im1haW4tbG9nby1maWxsIiBkPSJNNDE2LjM3LDMzLjcyYy0zLjQ3LTUuODUtOC4yNi0xMC4zNC0xNC4zNy0xMy40OC02LjEyLTMuMTQtMTIuOTctNC43MS0yMC41NC00Ljcxcy0xNCwxLjQ0LTE5LjksNC4zYy01LjksMi44Ny0xMC42Nyw2Ljg4LTE0LjI5LDEyLjAyLTMuMyw0LjY4LTUuNTMsOS45NC02LjcyLDE1Ljc0aDIyLjgxYzEuMDEtMy43MiwyLjg2LTYuNzEsNS41OS04LjkyLDMuMTQtMi41NCw3LjA5LTMuODIsMTEuODYtMy44Miw1LjQxLDAsOS42NiwxLjcxLDEyLjc1LDUuMTIsMy4wOSwzLjQxLDQuNzQsNy45OSw0Ljk1LDEzLjcyaC0yMi45Yy0xMi40NSwwLTIxLjc5LDIuNjYtMjguMDIsNy45Ni02LjIzLDUuMzEtOS4zNCwxMi4xMy05LjM0LDIwLjQ2LDAsNS4yLDEuMyw5LjgsMy45LDEzLjgxLDIuNiw0LjAxLDYuMTcsNy4xNSwxMC43Miw5LjQyLDQuNTUsMi4yNyw5LjY0LDMuNDEsMTUuMjcsMy40MSw2LjUsMCwxMi41Ni0xLjM4LDE4LjE5LTQuMTQsNS42My0yLjc2LDkuNjktNi4yLDEyLjE4LTEwLjMxdjEyLjgzaDIzLjA2di01Mi43OWMwLTcuOS0xLjczLTE0Ljc4LTUuMi0yMC42M1pNMzk4LjUsNjkuMTNjMCw0LjQ0LTEuMTksOC4yOC0zLjU3LDExLjUzLTIuMzgsMy4yNS01LjM5LDUuNjgtOS4wMSw3LjMxLTMuNjMsMS42Mi03LjM0LDIuNDQtMTEuMTMsMi40NC00LjIyLDAtNy41LS45Ny05LjgzLTIuOTItMi4zMy0xLjk1LTMuNDktNC41NS0zLjQ5LTcuOHMxLjI3LTYuMDYsMy44Mi04LjEyYzIuNTQtMi4wNiw2LjQxLTMuMDksMTEuNjEtMy4wOWgyMS42di42NVoiPjwvcGF0aD48cGF0aCBjbGFzcz0ibWFpbi1sb2dvLWZpbGwiIGQ9Ik01NjguNDEsMzMuNzJjLTMuNDctNS44NS04LjI2LTEwLjM0LTE0LjM3LTEzLjQ4LTYuMTItMy4xNC0xMi45Ny00LjcxLTIwLjU0LTQuNzFzLTE0LDEuNDQtMTkuOSw0LjNjLTUuOSwyLjg3LTEwLjY3LDYuODgtMTQuMjksMTIuMDItMy4zLDQuNjgtNS41Myw5Ljk0LTYuNzIsMTUuNzRoMjIuODFjMS4wMS0zLjcyLDIuODYtNi43MSw1LjU5LTguOTIsMy4xNC0yLjU0LDcuMDktMy44MiwxMS44Ni0zLjgyLDUuNDEsMCw5LjY2LDEuNzEsMTIuNzUsNS4xMiwzLjA5LDMuNDEsNC43NCw3Ljk5LDQuOTUsMTMuNzJoLTIyLjljLTEyLjQ1LDAtMjEuNzksMi42Ni0yOC4wMiw3Ljk2LTYuMjMsNS4zMS05LjM0LDEyLjEzLTkuMzQsMjAuNDYsMCw1LjIsMS4zLDkuOCwzLjksMTMuODEsMi42LDQuMDEsNi4xNyw3LjE1LDEwLjcyLDkuNDIsNC41NSwyLjI3LDkuNjQsMy40MSwxNS4yNywzLjQxLDYuNSwwLDEyLjU2LTEuMzgsMTguMTktNC4xNCw1LjYzLTIuNzYsOS42OS02LjIsMTIuMTgtMTAuMzF2MTIuODNoMjMuMDZ2LTUyLjc5YzAtNy45LTEuNzMtMTQuNzgtNS4yLTIwLjYzWk01NTAuNTUsNjkuMTNjMCw0LjQ0LTEuMTksOC4yOC0zLjU3LDExLjUzLTIuMzgsMy4yNS01LjM5LDUuNjgtOS4wMSw3LjMxLTMuNjMsMS42Mi03LjM0LDIuNDQtMTEuMTMsMi40NC00LjIyLDAtNy41LS45Ny05LjgzLTIuOTItMi4zMy0xLjk1LTMuNDktNC41NS0zLjQ5LTcuOHMxLjI3LTYuMDYsMy44Mi04LjEyYzIuNTQtMi4wNiw2LjQxLTMuMDksMTEuNjEtMy4wOWgyMS42di42NVoiPjwvcGF0aD48L2c+PC9zdmc+',
      alt: 'Katana'
    }
  ];

  return (
    <section className="mt-6">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 dark:text-white md:text-3xl lg:mb-12">
          Award-winning Manufacturing Software
        </h2>
        <div className="relative overflow-hidden pb-4">
          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="flex animate-marquee gap-6 lg:gap-10">
            {[...awards, ...awards].map((award, index) => (
              <a
                key={index}
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center justify-center transition-transform hover:scale-105"
              >
                <img
                  src={award.image}
                  alt={award.alt}
                  className="h-12 w-auto max-w-[150px] object-contain lg:h-16"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
