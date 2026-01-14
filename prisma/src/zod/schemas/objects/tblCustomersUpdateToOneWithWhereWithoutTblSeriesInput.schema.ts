import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema';
import { tblCustomersUpdateWithoutTblSeriesInputObjectSchema as tblCustomersUpdateWithoutTblSeriesInputObjectSchema } from './tblCustomersUpdateWithoutTblSeriesInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblSeriesInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblSeriesInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblSeriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblCustomersUpdateWithoutTblSeriesInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblSeriesInputObjectSchema)])
}).strict();
export const tblCustomersUpdateToOneWithWhereWithoutTblSeriesInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateToOneWithWhereWithoutTblSeriesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateToOneWithWhereWithoutTblSeriesInput>;
export const tblCustomersUpdateToOneWithWhereWithoutTblSeriesInputObjectZodSchema = makeSchema();
