import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSeriesScalarWhereInputObjectSchema as tblSeriesScalarWhereInputObjectSchema } from './tblSeriesScalarWhereInput.schema';
import { tblSeriesUpdateManyMutationInputObjectSchema as tblSeriesUpdateManyMutationInputObjectSchema } from './tblSeriesUpdateManyMutationInput.schema';
import { tblSeriesUncheckedUpdateManyWithoutTblCustomersInputObjectSchema as tblSeriesUncheckedUpdateManyWithoutTblCustomersInputObjectSchema } from './tblSeriesUncheckedUpdateManyWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSeriesScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblSeriesUpdateManyMutationInputObjectSchema), z.lazy(() => tblSeriesUncheckedUpdateManyWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblSeriesUpdateManyWithWhereWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblSeriesUpdateManyWithWhereWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesUpdateManyWithWhereWithoutTblCustomersInput>;
export const tblSeriesUpdateManyWithWhereWithoutTblCustomersInputObjectZodSchema = makeSchema();
