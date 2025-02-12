import { prismaClient } from './connections';
import type { sectionType, courseType, moduleType, lessonType } from '../../ambient';

export async function getSections(): Promise<sectionType[]> {
	try {
		return prismaClient.section.findMany();
	} catch (error) {
		console.log(error);
		return [];
	}
}

export async function getCourses(): Promise<courseType[]> {
	try {
		return prismaClient.course.findMany();
	} catch (error) {
		console.log(error);
		return [];
	}
}

export async function getModules(): Promise<moduleType[]> {
	try {
		return prismaClient.module.findMany();
	} catch (error) {
		console.log(error);
		return [];
	}
}

export async function getLessons(): Promise<lessonType[]> {
	try {
		return prismaClient.lesson.findMany();
	} catch (error) {
		console.log(error);
		return [];
	}
}

export async function getSectionsWithCoursesModulesAndLessons(): Promise<sectionType[]> {
	try {
		return prismaClient.section.findMany({
			include: {
				courses: {
					include: {
						modules: {
							include: {
								lessons: true
							}
						}
					}
				}
			}
		});
	} catch (error) {
		console.log(error);
		return [];
	}
}

export async function getCourseModulesAndLessonsBySlug(
	sectionSlug: string,
	courseSlug: string
): Promise<sectionType | null> {
	try {
		return await prismaClient.section.findFirst({
			where: {
				slug: sectionSlug
			},
			select: {
				name: true,
				slug: true,
				courses: {
					select: {
						name: true,
						slug: true,
						image: true,
						sectionId: true,
						modules: {
							select: {
								name: true,
								slug: true,
								courseId: true,
								lessons: {
									select: {
										title: true,
										slug: true,
										moduleId: true
									}
								}
							}
						}
					},
					where: {
						slug: courseSlug
					}
				}
			}
		});
	} catch (error) {
		console.log(error);
		return null;
	}
}

export async function getLessonBySlug(
	sectionSlug: string,
	courseSlug: string,
	moduleSlug: string,
	lessonSlug: string
): Promise<sectionType | null> {
	try {
		return await prismaClient.section.findFirst({
			where: {
				slug: sectionSlug
			},
			include: {
				courses: {
					where: {
						slug: courseSlug
					},
					include: {
						modules: {
							where: {
								slug: moduleSlug
							},
							include: {
								lessons: {
									where: {
										slug: lessonSlug
									}
								}
							}
						}
					}
				}
			}
		});
	} catch (error) {
		console.log(error);
		return null;
	}
}
