import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './dictLanguagesWhereInput.schema';
import { dictLanguagesUpdateWithoutTblCustomersInputObjectSchema as dictLanguagesUpdateWithoutTblCustomersInputObjectSchema } from './dictLanguagesUpdateWithoutTblCustomersInput.schema';
import { dictLanguagesUncheckedUpdateWithoutTblCustomersInputObjectSchema as dictLanguagesUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './dictLanguagesUncheckedUpdateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictLanguagesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictLanguagesUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => dictLanguagesUncheckedUpdateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const dictLanguagesUpdateToOneWithWhereWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.dictLanguagesUpdateToOneWithWhereWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUpdateToOneWithWhereWithoutTblCustomersInput>;
export const dictLanguagesUpdateToOneWithWhereWithoutTblCustomersInputObjectZodSchema = makeSchema();
