let date = new Date("2022-12-31");

let attendance = [];

function generate(student_id, noOfDays) {
  date = new Date("2022-12-31");
  for (let i = 0; i < noOfDays; i++) {
    attendance.push({
      date: new Date(date.setDate(date.getDate() + 1)),
      student_id,
      isAbsent: 1,
    });
  }
}

// 00:00:00.000 +00:00

// generate(614, 3);
// generate(615, 9);
// generate(616, 3);
// generate(617, 4);
// generate(618, 9);
// generate(719, 6);
// generate(619, 1);
// generate(620, 3);
// generate(621, 12);
// generate(622, 2);
// generate(623, 2);
// generate(624, 3);
// generate(625, 8);
// generate(626, 3);
// generate(627, 7);
// generate(628, 2);
// generate(629, 6);
// generate(630, 6);
// generate(631, 3);
// generate(632, 2);
// generate(633, 1);
// generate(634, 3);
// generate(635, 6);
// generate(636, 7);
// generate(637, 11);
// generate(638, 5);
// generate(639, 1);
// generate(640, 4);
// generate(641, 1);
// generate(643, 3);
// generate(644, 9);
// generate(645, 2);
// generate(646, 6);
// generate(647, 5);
// generate(648, 3);
// generate(649, 8);
// generate(650, 8);
// generate(869, 5);
// generate(651, 8);
// generate(652, 1);
// generate(653, 4);
// generate(654, 1);
// generate(655, 1);
// generate(656, 7);
// generate(657, 3);
// generate(658, 1);
// generate(659, 2);
// generate(660, 8);
// generate(661, 13);
// generate(870, 4);
// generate(663, 3);
// generate(664, 6);
// generate(665, 7);
// generate(666, 1);
// generate(667, 6);
// generate(668, 8);
// generate(669, 4);
// generate(670, 7);
// generate(671, 9);
// generate(672, 2);
// generate(673, 4);
// generate(674, 4);
// generate(675, 4);
// generate(676, 25);
// generate(678, 3);
// generate(679, 1);
// generate(680, 8);
// generate(681, 4);
// generate(682, 25);
// generate(683, 2);
// generate(684, 5);
// generate(685, 6);
// generate(686, 4);
// generate(687, 3);
// generate(688, 8);
// generate(689, 4);
// generate(690, 2);
// generate(691, 3);
// generate(692, 3);
// generate(693, 2);
// generate(694, 1);
// generate(695, 12);
// generate(696, 4);
// generate(697, 3);
// generate(698, 8);
// generate(699, 6);
// generate(700, 5);
// generate(701, 1);
// generate(702, 1);
// generate(703, 4);
// generate(704, 8);
// generate(705, 12);
// generate(706, 2);
// generate(707, 3);
// generate(708, 6);
// generate(709, 3);
// generate(710, 1);
// generate(711, 6);
// generate(712, 3);
// generate(871, 6);
// generate(872, 7);
// generate(873, 10);
// generate(874, 11);
// generate(875, 5);
// generate(876, 4);
// generate(877, 3);
// generate(878, 5);
// generate(879, 4);
// generate(880, 9);
// generate(881, 5);
// generate(882, 8);
// generate(883, 5);
// generate(884, 1);
// generate(885, 3);
// generate(886, 5);
// generate(721, 6);
// generate(722, 9);
// generate(723, 1);
// generate(724, 5);
// generate(725, 4);
// generate(726, 8);
// generate(727, 11);
// generate(728, 5);
// generate(730, 4);
// generate(731, 5);
// generate(732, 6);

// generate(733, 7);
// generate(734, 10);
// generate(735, 7);
// generate(736, 10);
// generate(737, 4);
// generate(738, 7);
// generate(739, 8);
// generate(740, 5);
// generate(741, 4);
// generate(742, 1);

// generate(743, 5);
// generate(744, 11);
// generate(745, 4);
// generate(746, 1);
// generate(747, 8);
// generate(748, 4);
// generate(749, 3);
// generate(750, 16);
// generate(751, 6);
// generate(752, 2);

// generate(753, 5);
// generate(754, 5);
// generate(756, 4);
// generate(757, 7);
// generate(758, 1);
// generate(759, 8);
// generate(760, 9);
// generate(761, 9);
// generate(762, 9);
// generate(763, 4);

// generate(764, 11);
// generate(765, 3);
// generate(766, 16);
// generate(767, 5);
// generate(768, 3);
// generate(945, 8);
// generate(844, 7);
// generate(845, 8);
// generate(846, 4);
// generate(847, 10);
// generate(848, 15);

// generate(849, 4);
// generate(850, 11);
// generate(851, 6);
// generate(852, 12);
// generate(853, 8);
// generate(854, 6);
// generate(855, 8);
// generate(856, 14);
// generate(857, 6);
// generate(858, 4);

// generate(860, 7);
// generate(861, 8);
// generate(769, 8);
// generate(770, 7);
// generate(771, 5);
// generate(772, 5);
// generate(773, 7);
// generate(774, 11);
// generate(775, 9);
// generate(776, 16);

// generate(777, 21);
// generate(778, 8);
// generate(779, 4);
// generate(780, 5);
// generate(781, 8);
// generate(782, 3);
// generate(783, 11);
// generate(784, 8);
// generate(785, 4);
// generate(786, 4);

// generate(787, 4);
// generate(713, 8);
// generate(788, 7);
// generate(789, 6);
// generate(790, 4);
// generate(791, 8);
// generate(792, 5);
// generate(793, 3);
// generate(794, 23);
// generate(795, 5);

// generate(796, 4);
// generate(797, 2);
// generate(798, 4);
// generate(799, 18);
// generate(714, 4);
// generate(800, 7);
// generate(801, 19);
// generate(802, 7);
// generate(803, 5);
// generate(804, 3);

// generate(805, 2);
// generate(806, 7);
// generate(807, 4);
// generate(949, 5);
// generate(808, 6);
// generate(809, 4);
// generate(810, 7);
// generate(811, 9);
// generate(812, 6);
// generate(813, 2);

// generate(814, 3);
// generate(815, 4);
// generate(816, 7);
// generate(817, 5);
// generate(818, 4);
// generate(819, 7);
// generate(820, 8);
// generate(821, 9);
// generate(822, 3);
// generate(823, 0);

// generate(824, 1);
// generate(825, 6);
// generate(826, 3);
// generate(827, 3);
// generate(828, 7);
// generate(829, 6);
// generate(830, 3);
// generate(831, 8);
// generate(832, 2);
// generate(833, 1);

// generate(834, 2);
// generate(835, 6);
// generate(836, 6);
// generate(887, 35);
// generate(888, 7);
// generate(889, 1);
// generate(890, 9);
// generate(891, 5);
// generate(892, 6);
// generate(893, 12);

// generate(894, 2);
// generate(895, 3);
// generate(896, 5);
// generate(897, 4);
// generate(898, 3);
// generate(899, 3);
// generate(900, 5);
// generate(901, 5);
// generate(902, 8);
// generate(903, 21);

// generate(904, 29);
// generate(905, 10);
// generate(906, 5);
// generate(907, 12);
// generate(909, 12);
// generate(910, 6);
// generate(911, 3);
// generate(912, 3);
// generate(913, 3);
// generate(914, 7);

// generate(915, 7);
// generate(916, 1);
// generate(917, 3);
// generate(918, 3);
// generate(920, 5);
// generate(921, 6);
// generate(922, 6);
// generate(923, 3);
// generate(924, 2);
// generate(925, 7);

// generate(926, 4);
// generate(927, 2);
// generate(928, 1);
// generate(929, 6);
// generate(930, 4);
// generate(931, 2);
// generate(934, 6);
// generate(935, 2);
// generate(862, 15);
// generate(863, 30);

// generate(864, 22);
// generate(865, 3);
// generate(866, 6);
// generate(867, 10);
// generate(837, 10);
// generate(838, 8);
// generate(839, 12);
// generate(840, 9);
// generate(841, 15);
// generate(715, 6);

// generate(842, 6);
// generate(936, 11);
// generate(937, 2);
// generate(938, 7);
// generate(939, 6);
// generate(940, 12);
// generate(941, 5);
// generate(942, 4);
// generate(943, 16);
// generate(944, 1);

generate(843, 15);
generate(716, 9);
generate(717, 6);
generate(718, 10);
generate(868, 1);

console.log(attendance);