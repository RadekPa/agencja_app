import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesScalarWhereInputObjectSchema as tblTitlesScalarWhereInputObjectSchema } from './tblTitlesScalarWhereInput.schema';
import { tblTitlesUpdateManyMutationInputObjectSchema as tblTitlesUpdateManyMutationInputObjectSchema } from './tblTitlesUpdateManyMutationInput.schema';
import { tblTitlesUncheckedUpdateManyWithoutDictLanguagesInputObjectSchema as tblTitlesUncheckedUpdateManyWithoutDictLanguagesInputObjectSchema } from './tblTitlesUncheckedUpdateManyWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblTitlesUpdateManyMutationInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateManyWithoutDictLanguagesInputObjectSchema)])
}).strict();
export const tblTitlesUpdateManyWithWhereWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateManyWithWhereWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateManyWithWhereWithoutDictLanguagesInput>;
export const tblTitlesUpdateManyWithWhereWithoutDictLanguagesInputObjectZodSchema = makeSchema();
