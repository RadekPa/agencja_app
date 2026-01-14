import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuthorsWhereUniqueInputObjectSchema as tblTitAuthorsWhereUniqueInputObjectSchema } from './tblTitAuthorsWhereUniqueInput.schema';
import { tblTitAuthorsUpdateWithoutTblTitlesInputObjectSchema as tblTitAuthorsUpdateWithoutTblTitlesInputObjectSchema } from './tblTitAuthorsUpdateWithoutTblTitlesInput.schema';
import { tblTitAuthorsUncheckedUpdateWithoutTblTitlesInputObjectSchema as tblTitAuthorsUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './tblTitAuthorsUncheckedUpdateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblTitAuthorsUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuthorsUncheckedUpdateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblTitAuthorsUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsUpdateWithWhereUniqueWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsUpdateWithWhereUniqueWithoutTblTitlesInput>;
export const tblTitAuthorsUpdateWithWhereUniqueWithoutTblTitlesInputObjectZodSchema = makeSchema();
