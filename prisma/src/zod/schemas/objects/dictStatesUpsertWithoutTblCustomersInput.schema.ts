import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesUpdateWithoutTblCustomersInputObjectSchema as dictStatesUpdateWithoutTblCustomersInputObjectSchema } from './dictStatesUpdateWithoutTblCustomersInput.schema';
import { dictStatesUncheckedUpdateWithoutTblCustomersInputObjectSchema as dictStatesUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './dictStatesUncheckedUpdateWithoutTblCustomersInput.schema';
import { dictStatesCreateWithoutTblCustomersInputObjectSchema as dictStatesCreateWithoutTblCustomersInputObjectSchema } from './dictStatesCreateWithoutTblCustomersInput.schema';
import { dictStatesUncheckedCreateWithoutTblCustomersInputObjectSchema as dictStatesUncheckedCreateWithoutTblCustomersInputObjectSchema } from './dictStatesUncheckedCreateWithoutTblCustomersInput.schema';
import { dictStatesWhereInputObjectSchema as dictStatesWhereInputObjectSchema } from './dictStatesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictStatesUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => dictStatesUncheckedUpdateWithoutTblCustomersInputObjectSchema)]),
  create: z.union([z.lazy(() => dictStatesCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => dictStatesUncheckedCreateWithoutTblCustomersInputObjectSchema)]),
  where: z.lazy(() => dictStatesWhereInputObjectSchema).optional()
}).strict();
export const dictStatesUpsertWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.dictStatesUpsertWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesUpsertWithoutTblCustomersInput>;
export const dictStatesUpsertWithoutTblCustomersInputObjectZodSchema = makeSchema();
