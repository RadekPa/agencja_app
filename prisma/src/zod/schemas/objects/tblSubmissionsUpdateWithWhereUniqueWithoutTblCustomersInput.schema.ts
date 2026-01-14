import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema';
import { tblSubmissionsUpdateWithoutTblCustomersInputObjectSchema as tblSubmissionsUpdateWithoutTblCustomersInputObjectSchema } from './tblSubmissionsUpdateWithoutTblCustomersInput.schema';
import { tblSubmissionsUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblSubmissionsUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblSubmissionsUncheckedUpdateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblSubmissionsUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedUpdateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblSubmissionsUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUpdateWithWhereUniqueWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUpdateWithWhereUniqueWithoutTblCustomersInput>;
export const tblSubmissionsUpdateWithWhereUniqueWithoutTblCustomersInputObjectZodSchema = makeSchema();
