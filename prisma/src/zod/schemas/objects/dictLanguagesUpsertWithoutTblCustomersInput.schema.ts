import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesUpdateWithoutTblCustomersInputObjectSchema as dictLanguagesUpdateWithoutTblCustomersInputObjectSchema } from './dictLanguagesUpdateWithoutTblCustomersInput.schema';
import { dictLanguagesUncheckedUpdateWithoutTblCustomersInputObjectSchema as dictLanguagesUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './dictLanguagesUncheckedUpdateWithoutTblCustomersInput.schema';
import { dictLanguagesCreateWithoutTblCustomersInputObjectSchema as dictLanguagesCreateWithoutTblCustomersInputObjectSchema } from './dictLanguagesCreateWithoutTblCustomersInput.schema';
import { dictLanguagesUncheckedCreateWithoutTblCustomersInputObjectSchema as dictLanguagesUncheckedCreateWithoutTblCustomersInputObjectSchema } from './dictLanguagesUncheckedCreateWithoutTblCustomersInput.schema';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './dictLanguagesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictLanguagesUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => dictLanguagesUncheckedUpdateWithoutTblCustomersInputObjectSchema)]),
  create: z.union([z.lazy(() => dictLanguagesCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => dictLanguagesUncheckedCreateWithoutTblCustomersInputObjectSchema)]),
  where: z.lazy(() => dictLanguagesWhereInputObjectSchema).optional()
}).strict();
export const dictLanguagesUpsertWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.dictLanguagesUpsertWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUpsertWithoutTblCustomersInput>;
export const dictLanguagesUpsertWithoutTblCustomersInputObjectZodSchema = makeSchema();
