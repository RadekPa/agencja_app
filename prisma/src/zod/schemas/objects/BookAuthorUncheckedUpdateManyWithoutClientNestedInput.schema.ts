import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BookAuthorCreateWithoutClientInputObjectSchema as BookAuthorCreateWithoutClientInputObjectSchema } from './BookAuthorCreateWithoutClientInput.schema';
import { BookAuthorUncheckedCreateWithoutClientInputObjectSchema as BookAuthorUncheckedCreateWithoutClientInputObjectSchema } from './BookAuthorUncheckedCreateWithoutClientInput.schema';
import { BookAuthorCreateOrConnectWithoutClientInputObjectSchema as BookAuthorCreateOrConnectWithoutClientInputObjectSchema } from './BookAuthorCreateOrConnectWithoutClientInput.schema';
import { BookAuthorUpsertWithWhereUniqueWithoutClientInputObjectSchema as BookAuthorUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './BookAuthorUpsertWithWhereUniqueWithoutClientInput.schema';
import { BookAuthorCreateManyClientInputEnvelopeObjectSchema as BookAuthorCreateManyClientInputEnvelopeObjectSchema } from './BookAuthorCreateManyClientInputEnvelope.schema';
import { BookAuthorWhereUniqueInputObjectSchema as BookAuthorWhereUniqueInputObjectSchema } from './BookAuthorWhereUniqueInput.schema';
import { BookAuthorUpdateWithWhereUniqueWithoutClientInputObjectSchema as BookAuthorUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './BookAuthorUpdateWithWhereUniqueWithoutClientInput.schema';
import { BookAuthorUpdateManyWithWhereWithoutClientInputObjectSchema as BookAuthorUpdateManyWithWhereWithoutClientInputObjectSchema } from './BookAuthorUpdateManyWithWhereWithoutClientInput.schema';
import { BookAuthorScalarWhereInputObjectSchema as BookAuthorScalarWhereInputObjectSchema } from './BookAuthorScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BookAuthorCreateWithoutClientInputObjectSchema), z.lazy(() => BookAuthorCreateWithoutClientInputObjectSchema).array(), z.lazy(() => BookAuthorUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => BookAuthorUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BookAuthorCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => BookAuthorCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BookAuthorUpsertWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => BookAuthorUpsertWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BookAuthorCreateManyClientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BookAuthorWhereUniqueInputObjectSchema), z.lazy(() => BookAuthorWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BookAuthorWhereUniqueInputObjectSchema), z.lazy(() => BookAuthorWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BookAuthorWhereUniqueInputObjectSchema), z.lazy(() => BookAuthorWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BookAuthorWhereUniqueInputObjectSchema), z.lazy(() => BookAuthorWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BookAuthorUpdateWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => BookAuthorUpdateWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BookAuthorUpdateManyWithWhereWithoutClientInputObjectSchema), z.lazy(() => BookAuthorUpdateManyWithWhereWithoutClientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BookAuthorScalarWhereInputObjectSchema), z.lazy(() => BookAuthorScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BookAuthorUncheckedUpdateManyWithoutClientNestedInputObjectSchema: z.ZodType<Prisma.BookAuthorUncheckedUpdateManyWithoutClientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BookAuthorUncheckedUpdateManyWithoutClientNestedInput>;
export const BookAuthorUncheckedUpdateManyWithoutClientNestedInputObjectZodSchema = makeSchema();
