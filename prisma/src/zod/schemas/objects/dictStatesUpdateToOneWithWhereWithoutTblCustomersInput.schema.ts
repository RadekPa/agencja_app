import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesWhereInputObjectSchema as dictStatesWhereInputObjectSchema } from './dictStatesWhereInput.schema';
import { dictStatesUpdateWithoutTblCustomersInputObjectSchema as dictStatesUpdateWithoutTblCustomersInputObjectSchema } from './dictStatesUpdateWithoutTblCustomersInput.schema';
import { dictStatesUncheckedUpdateWithoutTblCustomersInputObjectSchema as dictStatesUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './dictStatesUncheckedUpdateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictStatesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictStatesUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => dictStatesUncheckedUpdateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const dictStatesUpdateToOneWithWhereWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.dictStatesUpdateToOneWithWhereWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesUpdateToOneWithWhereWithoutTblCustomersInput>;
export const dictStatesUpdateToOneWithWhereWithoutTblCustomersInputObjectZodSchema = makeSchema();
