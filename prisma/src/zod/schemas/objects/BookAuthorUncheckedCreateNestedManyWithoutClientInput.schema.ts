import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BookAuthorCreateWithoutClientInputObjectSchema as BookAuthorCreateWithoutClientInputObjectSchema } from './BookAuthorCreateWithoutClientInput.schema';
import { BookAuthorUncheckedCreateWithoutClientInputObjectSchema as BookAuthorUncheckedCreateWithoutClientInputObjectSchema } from './BookAuthorUncheckedCreateWithoutClientInput.schema';
import { BookAuthorCreateOrConnectWithoutClientInputObjectSchema as BookAuthorCreateOrConnectWithoutClientInputObjectSchema } from './BookAuthorCreateOrConnectWithoutClientInput.schema';
import { BookAuthorCreateManyClientInputEnvelopeObjectSchema as BookAuthorCreateManyClientInputEnvelopeObjectSchema } from './BookAuthorCreateManyClientInputEnvelope.schema';
import { BookAuthorWhereUniqueInputObjectSchema as BookAuthorWhereUniqueInputObjectSchema } from './BookAuthorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BookAuthorCreateWithoutClientInputObjectSchema), z.lazy(() => BookAuthorCreateWithoutClientInputObjectSchema).array(), z.lazy(() => BookAuthorUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => BookAuthorUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BookAuthorCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => BookAuthorCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BookAuthorCreateManyClientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BookAuthorWhereUniqueInputObjectSchema), z.lazy(() => BookAuthorWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BookAuthorUncheckedCreateNestedManyWithoutClientInputObjectSchema: z.ZodType<Prisma.BookAuthorUncheckedCreateNestedManyWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.BookAuthorUncheckedCreateNestedManyWithoutClientInput>;
export const BookAuthorUncheckedCreateNestedManyWithoutClientInputObjectZodSchema = makeSchema();
