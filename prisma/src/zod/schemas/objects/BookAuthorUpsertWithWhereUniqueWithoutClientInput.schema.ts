import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BookAuthorWhereUniqueInputObjectSchema as BookAuthorWhereUniqueInputObjectSchema } from './BookAuthorWhereUniqueInput.schema';
import { BookAuthorUpdateWithoutClientInputObjectSchema as BookAuthorUpdateWithoutClientInputObjectSchema } from './BookAuthorUpdateWithoutClientInput.schema';
import { BookAuthorUncheckedUpdateWithoutClientInputObjectSchema as BookAuthorUncheckedUpdateWithoutClientInputObjectSchema } from './BookAuthorUncheckedUpdateWithoutClientInput.schema';
import { BookAuthorCreateWithoutClientInputObjectSchema as BookAuthorCreateWithoutClientInputObjectSchema } from './BookAuthorCreateWithoutClientInput.schema';
import { BookAuthorUncheckedCreateWithoutClientInputObjectSchema as BookAuthorUncheckedCreateWithoutClientInputObjectSchema } from './BookAuthorUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BookAuthorWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BookAuthorUpdateWithoutClientInputObjectSchema), z.lazy(() => BookAuthorUncheckedUpdateWithoutClientInputObjectSchema)]),
  create: z.union([z.lazy(() => BookAuthorCreateWithoutClientInputObjectSchema), z.lazy(() => BookAuthorUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const BookAuthorUpsertWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.BookAuthorUpsertWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.BookAuthorUpsertWithWhereUniqueWithoutClientInput>;
export const BookAuthorUpsertWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
