import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuthorsWhereUniqueInputObjectSchema as tblTitAuthorsWhereUniqueInputObjectSchema } from './tblTitAuthorsWhereUniqueInput.schema';
import { tblTitAuthorsCreateWithoutTblAuthorsInputObjectSchema as tblTitAuthorsCreateWithoutTblAuthorsInputObjectSchema } from './tblTitAuthorsCreateWithoutTblAuthorsInput.schema';
import { tblTitAuthorsUncheckedCreateWithoutTblAuthorsInputObjectSchema as tblTitAuthorsUncheckedCreateWithoutTblAuthorsInputObjectSchema } from './tblTitAuthorsUncheckedCreateWithoutTblAuthorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblTitAuthorsCreateWithoutTblAuthorsInputObjectSchema), z.lazy(() => tblTitAuthorsUncheckedCreateWithoutTblAuthorsInputObjectSchema)])
}).strict();
export const tblTitAuthorsCreateOrConnectWithoutTblAuthorsInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsCreateOrConnectWithoutTblAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsCreateOrConnectWithoutTblAuthorsInput>;
export const tblTitAuthorsCreateOrConnectWithoutTblAuthorsInputObjectZodSchema = makeSchema();
