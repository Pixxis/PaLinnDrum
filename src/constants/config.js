const sequenceList = [
  {
    id: 0,
    title: "Sequence 1",
    noteCount: 16,
    trackList: [
      {
        title: "Kick",
        soundFile: "kick",
        onNotes: [0, 4, 5, 11, 12, 15],
      },
      {
        title: "Snare",
        soundFile: "snare",
        onNotes: [2, 6, 10, 14],
      },
      {
        title: "Open Hat",
        soundFile: "hh_open",
        onNotes: [8],
      },
      {
        title: "Closed Hat",
        soundFile: "hh_closed",
        onNotes: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13, 14],
      },
    ],
  },
  {
    id: 1,
    title: "Sequence 2",
    noteCount: 16,
    trackList: [
      {
        title: "Kick",
        soundFile: "kick",
        onNotes: [0, 4, 8, 12, 14],
      },
      {
        title: "Snare",
        soundFile: "snare",
        onNotes: [4, 12],
      },
      {
        title: "Open Hat",
        soundFile: "hh_open",
        onNotes: [12, 15],
      },
      {
        title: "Closed Hat",
        soundFile: "hh_closed",
        onNotes: [0, 1, 2, 3, 5, 6, 7, 9, 11, 13, 14, 15],
      },
    ],
  },
  {
    id: 2,
    title: "Sequence 3",
    noteCount: 16,
    trackList: [
      {
        title: "Kick",
        soundFile: "kick",
        onNotes: [0, 2, 4, 6, 8, 10, 12, 14],
      },
      {
        title: "Snare",
        soundFile: "snare",
        onNotes: [2, 6, 10, 14],
      },
      {
        title: "Open Hat",
        soundFile: "hh_open",
        onNotes: [2, 6, 10, 14, 15],
      },
      {
        title: "Closed Hat",
        soundFile: "hh_closed",
        onNotes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
    ],
  },
  {
    id: 3,
    title: "Sequence 4",
    noteCount: 16,
    trackList: [
      {
        title: "Kick",
        soundFile: "kick",
        onNotes: [0, 2, 4, 6, 8, 10, 12, 14],
      },
      {
        title: "Snare",
        soundFile: "snare",
        onNotes: [],
      },
      {
        title: "Open Hat",
        soundFile: "hh_open",
        onNotes: [0, 2, 8, 10],
      },
      {
        title: "Closed Hat",
        soundFile: "hh_closed",
        onNotes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      },
    ],
  },
];

const soundFiles = {
  kick: "/sounds/kick.wav",
  snare: "/sounds/snare.wav",
  hh_open: "/sounds/hh_open.wav",
  hh_closed: "/sounds/hh_closed.wav",
};

export { sequenceList, soundFiles };
