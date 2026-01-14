import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesScalarWhereInputObjectSchema as tblTitlesScalarWhereInputObjectSchema } from './tblTitlesScalarWhereInput.schema';
import { tblTitlesUpdateManyMutationInputObjectSchema as tblTitlesUpdateManyMutationInputObjectSchema } from './tblTitlesUpdateManyMutationInput.schema';
import { tblTitlesUncheckedUpdateManyWithoutDictCoverFormatInputObjectSchema as tblTitlesUncheckedUpdateManyWithoutDictCoverFormatInputObjectSchema } from './tblTitlesUncheckedUpdateManyWithoutDictCoverFormatInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblTitlesUpdateManyMutationInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateManyWithoutDictCoverFormatInputObjectSchema)])
}).strict();
export const tblTitlesUpdateManyWithWhereWithoutDictCoverFormatInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateManyWithWhereWithoutDictCoverFormatInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateManyWithWhereWithoutDictCoverFormatInput>;
export const tblTitlesUpdateManyWithWhereWithoutDictCoverFormatInputObjectZodSchema = makeSchema();
