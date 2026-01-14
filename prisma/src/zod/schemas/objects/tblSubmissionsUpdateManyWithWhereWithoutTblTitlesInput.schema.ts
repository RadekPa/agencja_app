import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsScalarWhereInputObjectSchema as tblSubmissionsScalarWhereInputObjectSchema } from './tblSubmissionsScalarWhereInput.schema';
import { tblSubmissionsUpdateManyMutationInputObjectSchema as tblSubmissionsUpdateManyMutationInputObjectSchema } from './tblSubmissionsUpdateManyMutationInput.schema';
import { tblSubmissionsUncheckedUpdateManyWithoutTblTitlesInputObjectSchema as tblSubmissionsUncheckedUpdateManyWithoutTblTitlesInputObjectSchema } from './tblSubmissionsUncheckedUpdateManyWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmissionsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblSubmissionsUpdateManyMutationInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedUpdateManyWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblSubmissionsUpdateManyWithWhereWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUpdateManyWithWhereWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUpdateManyWithWhereWithoutTblTitlesInput>;
export const tblSubmissionsUpdateManyWithWhereWithoutTblTitlesInputObjectZodSchema = makeSchema();
