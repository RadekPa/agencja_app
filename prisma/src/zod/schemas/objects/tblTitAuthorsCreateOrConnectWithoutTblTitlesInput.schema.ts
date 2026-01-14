import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuthorsWhereUniqueInputObjectSchema as tblTitAuthorsWhereUniqueInputObjectSchema } from './tblTitAuthorsWhereUniqueInput.schema';
import { tblTitAuthorsCreateWithoutTblTitlesInputObjectSchema as tblTitAuthorsCreateWithoutTblTitlesInputObjectSchema } from './tblTitAuthorsCreateWithoutTblTitlesInput.schema';
import { tblTitAuthorsUncheckedCreateWithoutTblTitlesInputObjectSchema as tblTitAuthorsUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblTitAuthorsUncheckedCreateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblTitAuthorsCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuthorsUncheckedCreateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblTitAuthorsCreateOrConnectWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsCreateOrConnectWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsCreateOrConnectWithoutTblTitlesInput>;
export const tblTitAuthorsCreateOrConnectWithoutTblTitlesInputObjectZodSchema = makeSchema();
